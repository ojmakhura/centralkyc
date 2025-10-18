// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.centralkyc::individual::kyc::KycRecordService
 * STEREOTYPE:  Service
 */
package bw.co.centralkyc.individual.kyc;

import java.util.Collection;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.centralkyc.individual.kyc.KycRecordService
 */
@Service("kycRecordService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class KycRecordServiceImpl
    extends KycRecordServiceBase
{
    public KycRecordServiceImpl(
        KycRecordDao kycRecordDao,
        KycRecordRepository kycRecordRepository,
        MessageSource messageSource
    ) {
        
        super(
            kycRecordDao,
            kycRecordRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.centralkyc.individual.kyc.KycRecordService#findById(String)
     */
    @Override
    protected KycRecordDTO handleFindById(String id)
        throws Exception
    {
        // TODO implement protected  KycRecordDTO handleFindById(String id)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.kyc.KycRecordService.handleFindById(String id) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.individual.kyc.KycRecordService#save(KycRecordDTO)
     */
    @Override
    protected KycRecordDTO handleSave(KycRecordDTO kycRecord)
        throws Exception
    {
        // TODO implement protected  KycRecordDTO handleSave(KycRecordDTO kycRecord)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.kyc.KycRecordService.handleSave(KycRecordDTO kycRecord) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.individual.kyc.KycRecordService#remove(String)
     */
    @Override
    protected boolean handleRemove(String id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(String id)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.kyc.KycRecordService.handleRemove(String id) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.individual.kyc.KycRecordService#getAll()
     */
    @Override
    protected Collection<KycRecordDTO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<KycRecordDTO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.kyc.KycRecordService.handleGetAll() Not implemented!");
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
        // TODO implement protected  Page<KycRecordDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.kyc.KycRecordService.handleGetAll(Integer pageNumber, Integer pageSize) Not implemented!");
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
        // TODO implement protected  Collection<KycRecordDTO> handleFindByIndividual(String individualId)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.kyc.KycRecordService.handleFindByIndividual(String individualId) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.individual.kyc.KycRecordService#findByIdentityNo(String)
     */
    @Override
    protected Collection<KycRecordDTO> handleFindByIdentityNo(String identityNo)
        throws Exception
    {
        // TODO implement protected  Collection<KycRecordDTO> handleFindByIdentityNo(String identityNo)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.kyc.KycRecordService.handleFindByIdentityNo(String identityNo) Not implemented!");
    }

}