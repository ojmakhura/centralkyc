// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.centralkyc::subscription::KycSubscriptionService
 * STEREOTYPE:  Service
 */
package bw.co.centralkyc.subscription;

import java.util.Collection;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.centralkyc.subscription.KycSubscriptionService
 */
@Service("kycSubscriptionService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class KycSubscriptionServiceImpl
    extends KycSubscriptionServiceBase
{
    public KycSubscriptionServiceImpl(
        KycSubscriptionDao kycSubscriptionDao,
        KycSubscriptionRepository kycSubscriptionRepository,
        MessageSource messageSource
    ) {
        
        super(
            kycSubscriptionDao,
            kycSubscriptionRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.centralkyc.subscription.KycSubscriptionService#findById(String)
     */
    @Override
    protected KycSubscriptionDTO handleFindById(String id)
        throws Exception
    {
        // TODO implement protected  KycSubscriptionDTO handleFindById(String id)
        throw new UnsupportedOperationException("bw.co.centralkyc.subscription.KycSubscriptionService.handleFindById(String id) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.subscription.KycSubscriptionService#save(KycSubscriptionDTO)
     */
    @Override
    protected KycSubscriptionDTO handleSave(KycSubscriptionDTO subscription)
        throws Exception
    {
        // TODO implement protected  KycSubscriptionDTO handleSave(KycSubscriptionDTO subscription)
        throw new UnsupportedOperationException("bw.co.centralkyc.subscription.KycSubscriptionService.handleSave(KycSubscriptionDTO subscription) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.subscription.KycSubscriptionService#remove(String)
     */
    @Override
    protected boolean handleRemove(String id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(String id)
        throw new UnsupportedOperationException("bw.co.centralkyc.subscription.KycSubscriptionService.handleRemove(String id) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.subscription.KycSubscriptionService#getAll()
     */
    @Override
    protected Collection<KycSubscriptionDTO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<KycSubscriptionDTO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.centralkyc.subscription.KycSubscriptionService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.subscription.KycSubscriptionService#search(String)
     */
    @Override
    protected Collection<KycSubscriptionDTO> handleSearch(String criteria)
        throws Exception
    {
        // TODO implement protected  Collection<KycSubscriptionDTO> handleSearch(String criteria)
        throw new UnsupportedOperationException("bw.co.centralkyc.subscription.KycSubscriptionService.handleSearch(String criteria) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.subscription.KycSubscriptionService#getAll(Integer, Integer)
     */
    @Override
    protected Page<KycSubscriptionDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throws Exception
    {
        // TODO implement protected  Page<KycSubscriptionDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.centralkyc.subscription.KycSubscriptionService.handleGetAll(Integer pageNumber, Integer pageSize) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.subscription.KycSubscriptionService#search(String, Integer, Integer)
     */
    @Override
    protected Page<KycSubscriptionDTO> handleSearch(String criteria, Integer pageNumber, Integer pageSize)
        throws Exception
    {
        // TODO implement protected  Page<KycSubscriptionDTO> handleSearch(String criteria, Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.centralkyc.subscription.KycSubscriptionService.handleSearch(String criteria, Integer pageNumber, Integer pageSize) Not implemented!");
    }

}