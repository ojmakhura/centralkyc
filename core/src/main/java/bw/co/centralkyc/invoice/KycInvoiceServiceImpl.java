// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.centralkyc::invoice::KycInvoiceService
 * STEREOTYPE:  Service
 */
package bw.co.centralkyc.invoice;

import java.util.Collection;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.centralkyc.invoice.KycInvoiceService
 */
@Service("kycInvoiceService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class KycInvoiceServiceImpl
    extends KycInvoiceServiceBase
{
    public KycInvoiceServiceImpl(
        KycInvoiceDao kycInvoiceDao,
        KycInvoiceRepository kycInvoiceRepository,
        MessageSource messageSource
    ) {
        
        super(
            kycInvoiceDao,
            kycInvoiceRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.centralkyc.invoice.KycInvoiceService#findById(String)
     */
    @Override
    protected KycInvoiceDTO handleFindById(String id)
        throws Exception
    {
        // TODO implement protected  KycInvoiceDTO handleFindById(String id)
        throw new UnsupportedOperationException("bw.co.centralkyc.invoice.KycInvoiceService.handleFindById(String id) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.invoice.KycInvoiceService#save(KycInvoiceDTO)
     */
    @Override
    protected KycInvoiceDTO handleSave(KycInvoiceDTO invoice)
        throws Exception
    {
        // TODO implement protected  KycInvoiceDTO handleSave(KycInvoiceDTO invoice)
        throw new UnsupportedOperationException("bw.co.centralkyc.invoice.KycInvoiceService.handleSave(KycInvoiceDTO invoice) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.invoice.KycInvoiceService#remove(String)
     */
    @Override
    protected boolean handleRemove(String id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(String id)
        throw new UnsupportedOperationException("bw.co.centralkyc.invoice.KycInvoiceService.handleRemove(String id) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.invoice.KycInvoiceService#getAll()
     */
    @Override
    protected Collection<KycInvoiceDTO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<KycInvoiceDTO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.centralkyc.invoice.KycInvoiceService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.invoice.KycInvoiceService#search(String)
     */
    @Override
    protected Collection<KycInvoiceDTO> handleSearch(String criteria)
        throws Exception
    {
        // TODO implement protected  Collection<KycInvoiceDTO> handleSearch(String criteria)
        throw new UnsupportedOperationException("bw.co.centralkyc.invoice.KycInvoiceService.handleSearch(String criteria) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.invoice.KycInvoiceService#getAll(Integer, Integer)
     */
    @Override
    protected Page<KycInvoiceDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throws Exception
    {
        // TODO implement protected  Page<KycInvoiceDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.centralkyc.invoice.KycInvoiceService.handleGetAll(Integer pageNumber, Integer pageSize) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.invoice.KycInvoiceService#search(String, Integer, Integer)
     */
    @Override
    protected Page<KycInvoiceDTO> handleSearch(String criteria, Integer pageNumber, Integer pageSize)
        throws Exception
    {
        // TODO implement protected  Page<KycInvoiceDTO> handleSearch(String criteria, Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.centralkyc.invoice.KycInvoiceService.handleSearch(String criteria, Integer pageNumber, Integer pageSize) Not implemented!");
    }

}