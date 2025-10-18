// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.centralkyc::individual::employment::EmploymentRecordService
 * STEREOTYPE:  Service
 */
package bw.co.centralkyc.individual.employment;

import java.util.Collection;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.centralkyc.individual.employment.EmploymentRecordService
 */
@Service("employmentRecordService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class EmploymentRecordServiceImpl
    extends EmploymentRecordServiceBase
{
    public EmploymentRecordServiceImpl(
        EmploymentRecordDao employmentRecordDao,
        EmploymentRecordRepository employmentRecordRepository,
        MessageSource messageSource
    ) {
        
        super(
            employmentRecordDao,
            employmentRecordRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.centralkyc.individual.employment.EmploymentRecordService#findById(String)
     */
    @Override
    protected EmploymentRecordDTO handleFindById(String id)
        throws Exception
    {
        // TODO implement protected  EmploymentRecordDTO handleFindById(String id)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.employment.EmploymentRecordService.handleFindById(String id) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.individual.employment.EmploymentRecordService#save(EmploymentRecordDTO)
     */
    @Override
    protected EmploymentRecordDTO handleSave(EmploymentRecordDTO employmentRecord)
        throws Exception
    {
        // TODO implement protected  EmploymentRecordDTO handleSave(EmploymentRecordDTO employmentRecord)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.employment.EmploymentRecordService.handleSave(EmploymentRecordDTO employmentRecord) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.individual.employment.EmploymentRecordService#remove(String)
     */
    @Override
    protected boolean handleRemove(String id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(String id)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.employment.EmploymentRecordService.handleRemove(String id) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.individual.employment.EmploymentRecordService#getAll()
     */
    @Override
    protected Collection<EmploymentRecordDTO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<EmploymentRecordDTO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.employment.EmploymentRecordService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.individual.employment.EmploymentRecordService#search(String)
     */
    @Override
    protected Collection<EmploymentRecordDTO> handleSearch(String criteria)
        throws Exception
    {
        // TODO implement protected  Collection<EmploymentRecordDTO> handleSearch(String criteria)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.employment.EmploymentRecordService.handleSearch(String criteria) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.individual.employment.EmploymentRecordService#getAll(Integer, Integer)
     */
    @Override
    protected Page<EmploymentRecordDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throws Exception
    {
        // TODO implement protected  Page<EmploymentRecordDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.employment.EmploymentRecordService.handleGetAll(Integer pageNumber, Integer pageSize) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.individual.employment.EmploymentRecordService#search(String, Integer, Integer)
     */
    @Override
    protected Page<EmploymentRecordDTO> handleSearch(String criteria, Integer pageNumber, Integer pageSize)
        throws Exception
    {
        // TODO implement protected  Page<EmploymentRecordDTO> handleSearch(String criteria, Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.employment.EmploymentRecordService.handleSearch(String criteria, Integer pageNumber, Integer pageSize) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.individual.employment.EmploymentRecordService#findByIndividual(String)
     */
    @Override
    protected Collection<EmploymentRecordDTO> handleFindByIndividual(String individualId)
        throws Exception
    {
        // TODO implement protected  Collection<EmploymentRecordDTO> handleFindByIndividual(String individualId)
        throw new UnsupportedOperationException("bw.co.centralkyc.individual.employment.EmploymentRecordService.handleFindByIndividual(String individualId) Not implemented!");
    }

}