// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.centralkyc::individual::kyc::KycRecordService
 * STEREOTYPE:  Service
 */
package bw.co.centralkyc.kyc;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collection;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import bw.co.centralkyc.TargetEntity;
import bw.co.centralkyc.individual.Individual;
import bw.co.centralkyc.individual.IndividualRepository;
import bw.co.centralkyc.settings.Settings;
import bw.co.centralkyc.settings.SettingsRepository;

/**
 * @see bw.co.centralkyc.kyc.KycRecordService
 */
@Service("kycRecordService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class KycRecordServiceImpl
    extends KycRecordServiceBase
{
    private final IndividualRepository individualRepository;
    private final SettingsRepository settingsRepository;
    public KycRecordServiceImpl(
        KycRecordDao kycRecordDao,
        KycRecordRepository kycRecordRepository,
        MessageSource messageSource,
        SettingsRepository settingsRepository,
        IndividualRepository individualRepository
    ) {
        
        super(
            kycRecordDao,
            kycRecordRepository,
            messageSource
        );

        this.individualRepository = individualRepository;
        this.settingsRepository = settingsRepository;
    }

    /**
     * @see bw.co.centralkyc.individual.kyc.KycRecordService#findById(String)
     */
    @Override
    protected KycRecordDTO handleFindById(String id)
        throws Exception
    {

        KycRecord kycRecord = this.kycRecordRepository.findById(id)
            .orElseThrow(() -> new Exception("KycRecord not found for id: " + id));
        
        return this.kycRecordDao.toKycRecordDTO(kycRecord);
    }

    /**
     * @see bw.co.centralkyc.individual.kyc.KycRecordService#save(KycRecordDTO)
     */
    @Override
    protected KycRecordDTO handleSave(KycRecordDTO kycRecord)
        throws Exception
    {

        KycRecord kycRecordEntity = this.kycRecordDao.kycRecordDTOToEntity(kycRecord);

        if(kycRecordEntity.getUploadDate() == null) {
            kycRecordEntity.setUploadDate(LocalDate.now());
        }

        // if(kycRecordEntity.getExpiryDate() == null) {

        //     kycRecordEntity.setExpiryDate(kycRecordEntity.getUploadDate().plusYears(2));
        // }

            // System.out.println("************************************************************ " + kycRecordEntity.getExpiryDate());
        kycRecordEntity = this.kycRecordRepository.save(kycRecordEntity);

        return this.kycRecordDao.toKycRecordDTO(kycRecordEntity);
    }

    /**
     * @see bw.co.centralkyc.individual.kyc.KycRecordService#remove(String)
     */
    @Override
    protected boolean handleRemove(String id)
        throws Exception
    {

        if(!kycRecordRepository.existsById(id)) {

            throw new KycRecordServiceException("KycRecord not found for id: " + id);

        }

        kycRecordRepository.deleteById(id);
        return true;

    }

    /**
     * @see bw.co.centralkyc.individual.kyc.KycRecordService#getAll()
     */
    @Override
    protected Collection<KycRecordDTO> handleGetAll()
        throws Exception
    {

        Collection<KycRecord> kycRecords = this.kycRecordRepository.findAll();
        return this.kycRecordDao.toKycRecordDTOCollection(kycRecords);
    }

    /**
     * @see bw.co.centralkyc.individual.kyc.KycRecordService#search(String)
     */
    @Override
    protected Collection<KycRecordDTO> handleSearch(String criteria)
        throws Exception
    {
        // TODO implement protected  Collection<KycRecordDTO> handleSearch(String criteria)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.kyc.KycRecordService.handleSearch(String criteria) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.individual.kyc.KycRecordService#getAll(Integer, Integer)
     */
    @Override
    protected Page<KycRecordDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throws Exception
    {

        Page<KycRecord> kycRecords = this.kycRecordRepository.findAll(PageRequest.of(pageNumber, pageSize));
        return kycRecords.map(kycRecord -> {
            try {
                return this.kycRecordDao.toKycRecordDTO(kycRecord);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });
    }

    /**
     * @see bw.co.centralkyc.individual.kyc.KycRecordService#search(String, Integer, Integer)
     */
    @Override
    protected Page<KycRecordDTO> handleSearch(String criteria, Integer pageNumber, Integer pageSize)
        throws Exception
    {
        // TODO implement protected  Page<KycRecordDTO> handleSearch(String criteria, Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.kyc.KycRecordService.handleSearch(String criteria, Integer pageNumber, Integer pageSize) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.individual.kyc.KycRecordService#findByIndividual(String)
     */
    @Override
    protected Collection<KycRecordDTO> handleFindByIndividual(String individualId)
        throws Exception
    {

        Specification<KycRecord> specification = (root, query, cb) -> 
            cb.and(cb.equal(root.get("target"), "INDIVIDUAL"), cb.equal(root.get("targetId"), individualId));

        Collection<KycRecord> kycRecords = this.kycRecordRepository.findAll(specification);
        return this.kycRecordDao.toKycRecordDTOCollection(kycRecords);
    }

    /**
     * @see bw.co.centralkyc.individual.kyc.KycRecordService#findByIdentityNo(String)
     */
    @Override
    protected Collection<KycRecordDTO> handleFindByIdentityNo(String identityNo)
        throws Exception
    {

        Individual individual = this.individualRepository.findByIdentityNo(identityNo);

        return this.findByIndividual(individual.getId());
    }

    @Override
    protected Collection<KycRecordDTO> handleFindByOrganisation(String organisationId) throws Exception {
        
        Specification<KycRecord> specification = (root, query, cb) -> 
            cb.and(cb.equal(root.get("target"), "ORGANISATION"), cb.equal(root.get("targetId"), organisationId));

        Collection<KycRecord> kycRecords = this.kycRecordRepository.findAll(specification);
        return this.kycRecordDao.toKycRecordDTOCollection(kycRecords);
    }

    @Override
    protected Page<KycRecordDTO> handleFindByIndividual(String individualId, Integer pageNumber, Integer pageSize)
            throws Exception {
        
        Specification<KycRecord> specification = (root, query, cb) -> 
            cb.and(cb.equal(root.get("target"), "INDIVIDUAL"), cb.equal(root.get("targetId"), individualId));   

        Page<KycRecord> kycRecords = this.kycRecordRepository.findAll(specification, PageRequest.of(pageNumber, pageSize));
        return kycRecords.map(kycRecord -> {
            try {
                return this.kycRecordDao.toKycRecordDTO(kycRecord);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });
    }

    @Override
    protected Page<KycRecordDTO> handleFindByIdentityNo(String identityNo, Integer pageNumber, Integer pageSize)
            throws Exception {

        Individual individual = this.individualRepository.findByIdentityNo(identityNo);

        return this.handleFindByIndividual(individual.getId(), pageNumber, pageSize);
    }

    @Override
    protected Page<KycRecordDTO> handleFindByOrganisation(String organisationId, Integer pageNumber,
            Integer pageSize) throws Exception {
        
        Specification<KycRecord> specification = (root, query, cb) -> 
            cb.and(cb.equal(root.get("target"), "ORGANISATION"), cb.equal(root.get("targetId"), organisationId));

        Page<KycRecord> kycRecords = this.kycRecordRepository.findAll(specification, PageRequest.of(pageNumber, pageSize));
        return kycRecords.map(kycRecord -> {
            try {
                return this.kycRecordDao.toKycRecordDTO(kycRecord);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });
    }

    @Override
    protected KycRecordDTO handleCreateTargetRecord(String targetId, TargetEntity target, String user)
            throws Exception {

        Settings settings = this.settingsRepository.findAll().stream().findFirst()
            .orElseThrow(() -> new Exception("Settings not found"));

        KycRecord record = KycRecord.Factory.newInstance();
        record.setTarget(target);
        record.setTargetId(targetId);
        record.setCreatedAt(LocalDateTime.now());
        record.setCreatedBy(user);
        record.setUploadDate(LocalDate.now());
        record.setKycStatus(KycComplianceStatus.INCOMPLETE);
        record.setExpiryDate(record.getUploadDate().plusDays(settings.getKycDuration()));

        record = this.kycRecordRepository.save(record);

        return this.kycRecordDao.toKycRecordDTO(record);
    }

}