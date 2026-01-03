package bw.co.centralkyc.keycloak;

import java.net.URI;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.keycloak.admin.client.resource.OrganizationResource;
import org.keycloak.admin.client.resource.OrganizationsResource;
import org.keycloak.representations.idm.OrganizationDomainRepresentation;
import org.keycloak.representations.idm.OrganizationRepresentation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import bw.co.centralkyc.GeneralStatus;
import bw.co.centralkyc.PhoneNumber;
import bw.co.centralkyc.SearchObject;
import bw.co.centralkyc.kyc.KycComplianceStatus;
import bw.co.centralkyc.organisation.OrganisationDTO;
import bw.co.centralkyc.organisation.OrganisationDomain;
import bw.co.centralkyc.organisation.OrganisationListDTO;
import bw.co.centralkyc.organisation.OrganisationSearchCriteria;
import jakarta.ws.rs.WebApplicationException;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.Response.StatusType;
import lombok.RequiredArgsConstructor;
import tools.jackson.databind.json.JsonMapper;

@Component
@RequiredArgsConstructor
public class KeycloakOrganisationService {

    private final KeycloakService keycloakService;
    private final JsonMapper jsonMapper;
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss.SSSSSS");

    private OrganizationRepresentation fromOrganisationDTO(OrganisationDTO organisation) {

        if (organisation == null) {

            throw new WebApplicationException("Cannot convert a null organisation to representation.");
        }

        OrganizationRepresentation rep = new OrganizationRepresentation();

        rep.setId(organisation.getId());
        rep.setName(organisation.getName());
        rep.setAlias(organisation.getCode());
        rep.setDescription(organisation.getDescription());

        Map<String, List<String>> attributes = new HashMap<>();
        attributes.put("registrationNo", List.of(organisation.getRegistrationNo()));
        attributes.put("status", List.of(organisation.getStatus().toString()));

        if (organisation.getDomains() != null) {

            for (OrganisationDomain dom : organisation.getDomains()) {

                OrganizationDomainRepresentation od = new OrganizationDomainRepresentation(dom.getName());
                od.setVerified(dom.getVerified());

                rep.addDomain(od);
            }
        }

        if (organisation.getPhysicalAddress() != null) {
            attributes.put("physicalAddress", List.of(organisation.getPhysicalAddress()));
        }

        if (organisation.getPostalAddress() != null) {
            attributes.put("postalAddress", List.of(organisation.getPostalAddress()));
        }

        if (organisation.getContactEmailAddress() != null) {
            attributes.put("contactEmailAddress", List.of(organisation.getContactEmailAddress()));
        }

        if (organisation.getCreatedBy() != null) {
            attributes.put("createdBy", List.of(organisation.getCreatedBy()));
        }

        if (organisation.getCreatedAt() != null) {
            attributes.put("createdAt", List.of(formatter.format(organisation.getCreatedAt())));
        }

        attributes.put("modifiedBy",
                organisation.getModifiedBy() != null ? List.of(organisation.getModifiedBy()) : List.of());
        attributes.put("modifiedAt",
                organisation.getModifiedAt() != null ? List.of(formatter.format(organisation.getModifiedAt()))
                        : List.of());

        if (CollectionUtils.isNotEmpty(organisation.getDocuments())) {
            attributes.put("documents", organisation.getDocuments().stream().map(doc -> doc.getId()).toList());
        } else {
            attributes.put("documents", List.of());
        }

        if (CollectionUtils.isNotEmpty(organisation.getClientKycDocuments())) {
            attributes.put("clientKycDocuments",
                    organisation.getClientKycDocuments().stream().map(d -> d.getId()).toList());
        } else {
            attributes.put("clientKycDocuments", List.of());
        }

        if (CollectionUtils.isNotEmpty(organisation.getClientRequestsFiles())) {
            attributes.put("clientRequestsFiles",
                    organisation.getClientRequestsFiles().stream().map(d -> d.getId()).toList());
        } else {
            attributes.put("clientRequestsFiles", List.of());
        }

        if(organisation.getIsClient() != null) {
            attributes.put("isClient", List.of(organisation.getIsClient().toString()));
        }

        if (CollectionUtils.isNotEmpty(organisation.getPhoneNumbers())) {

            attributes.put("phoneNumbers", organisation.getPhoneNumbers().stream().map(p -> p.toString()).toList());
        }

        if(organisation.getKycStatus() != null) {

            attributes.put("kycStatus", List.of(organisation.getKycStatus().toString()));
        }

        if(organisation.getCountryOfRegistration() != null) {
            attributes.put("countryOfRegistration", List.of(organisation.getCountryOfRegistration()));
        }

        rep.setAttributes(attributes);

        return rep;
    }

    private OrganisationDTO toOrganisationDTO(OrganizationRepresentation rep) {

        if (rep == null) {

            throw new WebApplicationException("Cannot convert a null organisation representation.");
        }

        OrganisationDTO org = new OrganisationDTO();

        org.setId(rep.getId());
        org.setCode(rep.getAlias());
        org.setName(rep.getName());
        org.setDescription(rep.getDescription());

        Map<String, List<String>> attributes = rep.getAttributes();

        if (attributes.containsKey("registrationNo")) {
            org.setRegistrationNo(attributes.get("registrationNo").listIterator().hasNext()
                    ? attributes.get("registrationNo").get(0)
                    : null);
        }

        if (attributes.containsKey("physicalAddress")) {
            org.setPhysicalAddress(attributes.get("physicalAddress").listIterator().hasNext()
                    ? attributes.get("physicalAddress").get(0)
                    : null);
        }

        if (attributes.containsKey("postalAddress")) {
            org.setPostalAddress(attributes.get("postalAddress").listIterator().hasNext()
                    ? attributes.get("postalAddress").get(0)
                    : null);
        }

        if (attributes.containsKey("status")) {
            org.setStatus(GeneralStatus.valueOf(attributes.get("status").listIterator().hasNext()
                    ? attributes.get("status").get(0)
                    : null));
        }

        if (attributes.containsKey("contactEmailAddress")) {
            org.setContactEmailAddress(attributes.get("contactEmailAddress").listIterator().hasNext()
                    ? attributes.get("contactEmailAddress").get(0)
                    : null);
        }

        if (attributes.containsKey("isClient")) {
            org.setIsClient(Boolean.parseBoolean(attributes.get("isClient").listIterator().hasNext()
                    ? attributes.get("isClient").get(0)
                    : null));
        }

        if (attributes.containsKey("createdBy")) {
            org.setCreatedBy(attributes.get("createdBy").listIterator().hasNext()
                    ? attributes.get("createdBy").get(0)
                    : null);
        }

        if (attributes.containsKey("createdAt")) {

            String time = attributes.get("createdAt").get(0);
            org.setCreatedAt(LocalDateTime.from(formatter.parse(time)));
        }

        if (attributes.containsKey("modifiedBy")) {
            org.setCreatedBy(attributes.get("modifiedBy").get(0));
        }

        if (attributes.containsKey("modifiedAt")) {

            String time = attributes.get("modifiedAt").get(0);
            org.setModifiedAt(LocalDateTime.from(formatter.parse(time)));
        }

        if (attributes.containsKey("phoneNumbers")) {

            List<String> phoneStrs = attributes.get("phoneNumbers");

            List<PhoneNumber> phoneNumbers = phoneStrs.stream()
                    .map(p -> jsonMapper.readValue(p, PhoneNumber.class)).collect(Collectors.toList());
            org.setPhoneNumbers(phoneNumbers);
        }

        if(attributes.containsKey("kycStatus")) {

            org.setKycStatus(KycComplianceStatus.valueOf(attributes.get("kycStatus").listIterator().hasNext()
                    ? attributes.get("kycStatus").get(0)
                    : null));

        }

        if(attributes.containsKey("countryOfRegistration")) {
            org.setCountryOfRegistration(attributes.get("countryOfRegistration").listIterator().hasNext()
                    ? attributes.get("countryOfRegistration").get(0)
                    : null);
        }

        org.setDomains(
                rep.getDomains().stream().map(r -> new OrganisationDomain(r.getName(), r.isVerified()))
                        .collect(Collectors.toSet()));

        return org;
    }

    private OrganisationListDTO toOrganisationListDTO(OrganizationRepresentation rep) {

        if (rep == null) {

            throw new WebApplicationException("Cannot convert a null organisation representation.");
        }

        OrganisationListDTO org = new OrganisationListDTO();

        org.setId(rep.getId());
        org.setCode(rep.getAlias());
        org.setName(rep.getName());

        Map<String, List<String>> attributes = rep.getAttributes();

        if (attributes != null) {
            if (attributes.get("registrationNo") != null) {
                org.setRegistrationNo(attributes.get("registrationNo").listIterator().hasNext()
                        ? attributes.get("registrationNo").get(0)
                        : null);
            }

            if (attributes.get("status") != null) {

                org.setStatus(GeneralStatus.valueOf(attributes.get("status").listIterator().hasNext()
                        ? attributes.get("status").get(0)
                        : null));
            }

            if (attributes.get("contactEmailAddress") != null) {

                org.setContactEmailAddress(attributes.get("contactEmailAddress").listIterator().hasNext()
                        ? attributes.get("contactEmailAddress").get(0)
                        : null);
            }

            if (attributes.get("contactEmailAddress") != null) {

                org.setKycStatus(
                        attributes.get("kycStatus").listIterator().hasNext()
                                ? KycComplianceStatus.valueOf(attributes.get("kycStatus").get(0))
                                : null);
            }

            if(attributes.get("isClient") != null) {

                org.setIsClient(Boolean.parseBoolean(attributes.get("isClient").listIterator().hasNext()
                        ? attributes.get("isClient").get(0)
                        : null));
            }
        }

        return org;
    }

    public static String getCreatedId(Response response) {
        URI location = response.getLocation();
        // if (!response.getStatusInfo().equals(Status.CREATED)) {
        if (response.getStatus() != HttpStatus.CREATED.value()) {
            StatusType statusInfo = response.getStatusInfo();
            response.bufferEntity();
            String body = response.readEntity(String.class);
            throw new WebApplicationException("Create method returned status "
                    + statusInfo.getReasonPhrase() + " (Code: " + statusInfo.getStatusCode()
                    + "); expected status: Created (201). Response body: " + body, response);
        }

        if (location == null) {
            return null;
        }

        String path = location.getPath();
        return path.substring(path.lastIndexOf('/') + 1);
    }

    public OrganisationDTO createOrganisation(OrganisationDTO organisation) {

        OrganizationsResource orgsResource = keycloakService.getOrganizationsResource();

        if (StringUtils.isBlank(organisation.getId())) {

            Response res = orgsResource.create(fromOrganisationDTO(organisation));

            if (res.getStatus() != HttpStatus.CREATED.value()) {
                StatusType statusInfo = res.getStatusInfo();
                res.bufferEntity();
                String body = res.readEntity(String.class);
                throw new WebApplicationException("Create method returned status "
                        + statusInfo.getReasonPhrase() + " (Code: " + statusInfo.getStatusCode()
                        + "); expected status: Created (201). Response body: " + body, res);
            }

            organisation.setId(getCreatedId(res));

        } else {
            OrganizationResource orgResource = orgsResource.get(organisation.getId());
            Response res = orgResource.update(fromOrganisationDTO(organisation));

            if (res.getStatus() != HttpStatus.NO_CONTENT.value()) {
                StatusType statusInfo = res.getStatusInfo();
                res.bufferEntity();
                String body = res.readEntity(String.class);
                throw new WebApplicationException("Update method returned status "
                        + statusInfo.getReasonPhrase() + " (Code: " + statusInfo.getStatusCode()
                        + "); expected status: NO_CONTENT (204). Response body: " + body, res);
            }
        }
        return organisation;
    }

    public OrganizationRepresentation getOrganisationRepresentationById(String id) {

        OrganizationsResource orgsResource = keycloakService.getOrganizationsResource();
        OrganizationResource orgResource = orgsResource.get(id);

        OrganizationRepresentation orgRep = orgResource.toRepresentation();

        return orgRep;

    }

    public OrganisationDTO findById(String id) {

        return toOrganisationDTO(getOrganisationRepresentationById(id));
    }

    public List<OrganisationListDTO> getAll() {

        OrganizationsResource orgsResource = keycloakService.getOrganizationsResource();
        List<OrganizationRepresentation> orgsReps = orgsResource.getAll();

        return orgsReps.stream().map(
                rep -> toOrganisationListDTO(rep)).toList();
    }

    public Page<OrganisationListDTO> getAll(Integer pageNumber, Integer pageSize) {

        OrganizationsResource orgsResource = keycloakService.getOrganizationsResource();
        List<OrganizationRepresentation> orgsReps = orgsResource.list(pageNumber * pageSize, pageSize);
        long count = orgsResource.count("");

        List<OrganisationListDTO> orgs = orgsReps.stream().map(
                rep -> toOrganisationListDTO(rep)).toList();

        return new PageImpl<>(orgs, PageRequest.of(pageNumber, pageSize), count);

    }

    public List<OrganisationListDTO> search(OrganisationSearchCriteria criteria) {

        OrganizationsResource orgsResource = keycloakService.getOrganizationsResource();

        if (criteria == null) {

            criteria = new OrganisationSearchCriteria();
        }

        String search = null;

        if (criteria.getId() != null) {

            search = criteria.getId();
        } else if (criteria.getName() != null) {

            search = criteria.getName();
        }

        List<OrganizationRepresentation> orgsReps = orgsResource.search(search);

        return orgsReps.stream().map(
                rep -> toOrganisationListDTO(rep)).toList();
    }

    public Page<OrganisationListDTO> search(SearchObject<OrganisationSearchCriteria> criteria) {

        OrganizationsResource orgsResource = keycloakService.getOrganizationsResource();
        if (criteria.getCriteria() == null) {
            criteria.setCriteria(new OrganisationSearchCriteria());
        }

        String search = null;

        if (criteria.getCriteria().getId() != null) {

            search = criteria.getCriteria().getId();
        } else if (criteria.getCriteria().getName() != null) {

            search = criteria.getCriteria().getName();
        }

        Integer pageNumber = criteria.getPageNumber();
        Integer pageSize = criteria.getPageSize();

        List<OrganizationRepresentation> orgsReps = orgsResource.search(
                search,
                false,
                pageNumber * pageSize,
                pageSize);

        long count = orgsResource.count(
                StringUtils.isNotBlank(criteria.getCriteria().getId()) ? criteria.getCriteria().getId()
                        : criteria.getCriteria().getName());

        List<OrganisationListDTO> orgs = orgsReps.stream().map(
                rep -> toOrganisationListDTO(rep)).toList();

        return new PageImpl<>(orgs, PageRequest.of(criteria.getPageNumber(), criteria.getPageSize()), count);
    }

    public Boolean remove(String id) {

        OrganizationsResource orgsResource = keycloakService.getOrganizationsResource();
        OrganizationResource orgResource = orgsResource.get(id);
        Response res = orgResource.delete();

        return res.getStatus() == HttpStatus.OK.value();
    }

    public OrganisationDTO findByRegistrationNo(String registrationNo) {

        if (StringUtils.isNotBlank(registrationNo)) {

            throw new IllegalArgumentException("Registration number must be provided.");
        }

        OrganizationsResource orgsResource = keycloakService.getOrganizationsResource();
        List<OrganizationRepresentation> orgs = orgsResource.searchByAttribute("registrationNo:" + registrationNo);

        OrganisationDTO org = orgs.stream().filter(rep -> {

            Map<String, List<String>> attributes = rep.getAttributes();

            if (attributes != null && attributes.containsKey("registrationNo")) {

                String regNo = attributes.get("registrationNo").listIterator().hasNext()
                        ? attributes.get("registrationNo").get(0)
                        : null;

                return registrationNo.equals(regNo);
            }

            return false;
        }).findFirst().map(rep -> toOrganisationDTO(rep)).orElse(null);

        return org;
    }
}
