import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormField, form } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { KycFieldGroupDTO } from '@app/models/bw/co/knowvera/settings/kyc/kyc-field-group-dto';
import { GroupFieldDTO } from '@app/models/bw/co/knowvera/settings/kyc/group-field-dto';

export interface KycFieldGroupSelectorDialogData {
  groups: KycFieldGroupDTO[];
  selectedGroupId?: string | null;
  selectedGroup?: KycFieldGroupDTO | null;
  selectedFieldIds?: string[];
  selectedFields?: GroupFieldDTO[];
}

export interface KycFieldGroupSelectorDialogResult {
  groupId: string;
  group: KycFieldGroupDTO;
  fieldIds: string[];
  fields: GroupFieldDTO[];
}

interface KycFieldGroupSelectionState {
  groupId: string;
  group: KycFieldGroupDTO | null;
  fieldIds: string[];
  fields: GroupFieldDTO[];
}

@Component({
  selector: 'app-kyc-field-group-selector-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormField,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 mat-dialog-title>Select Field Group</h2>

    <mat-dialog-content>
      <div class="dialog-form">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Field Group</mat-label>
          <mat-select
            [formField]="selectionForm.group"
          >
            @for (group of data.groups || []; track group.id) {
              <mat-option [value]="group.id">{{ group.label || 'Untitled Group' }}</mat-option>
            }
          </mat-select>
        </mat-form-field>

        @if (selectedGroupData(); as group) {
          <div class="fields-section">
            <div class="fields-head">
              <span>Fields</span>
              <button mat-button type="button" (click)="toggleSelectAll()">
                {{ allFieldsSelected() ? 'Deselect All' : 'Select All' }}
              </button>
            </div>

            <mat-selection-list [multiple]="true">
              @for (field of group.groupFields || []; track field.id || field.fieldId) {
                <mat-list-option
                  [selected]="isFieldSelected(field)"
                  (click)="toggleField(field)"
                >
                  {{ field.field || field.fieldId || 'Unknown Field' }}
                </mat-list-option>
              } @empty {
                <p class="empty-text">This group has no fields.</p>
              }
            </mat-selection-list>
          </div>
        } @else {
          <p class="empty-text">Select a field group to choose its fields.</p>
        }
      </div>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-stroked-button type="button" (click)="onCancel()">Cancel</button>
      <button
        mat-flat-button
        color="primary"
        type="button"
        [disabled]="!selectedGroup() || !selectedFields().length"
        (click)="onApply()"
      >
        Apply
      </button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      mat-dialog-content {
        min-width: 420px;
      }
      .dialog-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding-top: 8px;
      }
      .full-width {
        width: 100%;
      }
      mat-form-field {
        width: 100%;
      }
      .fields-section {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .fields-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .empty-text {
        color: rgba(0, 0, 0, 0.6);
        font-size: 0.9rem;
      }
    `,
  ],
})
export class KycFieldGroupSelectorDialogComponent {
  private dialogRef = inject(
    MatDialogRef<KycFieldGroupSelectorDialogComponent, KycFieldGroupSelectorDialogResult>
  );
  data: KycFieldGroupSelectorDialogData = inject(MAT_DIALOG_DATA);

  private selectionModel = signal<KycFieldGroupSelectionState>({
    groupId: this.data?.selectedGroupId || (this.data?.groups?.[0]?.id ?? ''),
    group: this.data?.groups?.find((group) => group.id === this.data?.selectedGroupId) || null,
    fieldIds: [...(this.data?.selectedFieldIds || [])],
    fields: this.data?.groups?.find((group) => group.id === this.data?.selectedGroupId)?.groupFields || [],
  });
  selectionForm = form(this.selectionModel);

  selectedGroup = computed(() => this.selectionModel().groupId);
  selectedFields = computed(() => this.selectionModel().fieldIds);

  selectedGroupData = computed<KycFieldGroupDTO | undefined>(() =>
    (this.data.groups || []).find((group) => group.id === this.selectedGroup())
  );

  allFieldsSelected = computed<boolean>(() => {
    const group = this.selectedGroupData();
    const fieldIds = (group?.groupFields || []).map((field: any) => field.id || field.fieldId);

    return fieldIds.length > 0 && fieldIds.every((id: string) => this.selectedFields().includes(id));
  });

  onGroupChange(groupId: string): void {
    this.selectionModel.update((selection) => ({ ...selection, groupId, fieldIds: [] }));
  }

  isFieldSelected(field: any): boolean {
    return this.selectedFields().includes(field.id || field.fieldId);
  }

  toggleField(field: any): void {
    const fieldId = field.id || field.fieldId;

    this.selectionModel.update((selection) => ({
      ...selection,
      fieldIds: selection.fieldIds.includes(fieldId)
        ? selection.fieldIds.filter((id) => id !== fieldId)
        : [...selection.fieldIds, fieldId],
    }));
  }

  toggleSelectAll(): void {
    const group = this.selectedGroupData();
    const fieldIds = (group?.groupFields || []).map((field: any) => field.id || field.fieldId);

    this.selectionModel.update((selection) => ({
      ...selection,
      fieldIds: this.allFieldsSelected() ? [] : fieldIds,
    }));
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onApply(): void {
    const groupId = this.selectedGroup();

    if (!groupId || !this.selectedFields().length) return;

    this.dialogRef.close({ groupId, fieldIds: this.selectedFields() });
  }
}
