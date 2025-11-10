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
import java.util.HashSet;

import org.apache.commons.lang3.StringUtils;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import bw.co.centralkyc.organisation.Organisation;
import bw.co.centralkyc.organisation.OrganisationRepository;
import bw.co.centralkyc.sequence.SequenceGenerator;
import bw.co.centralkyc.sequence.SequenceGeneratorService;
import bw.co.centralkyc.sequence.SequencePart;
import bw.co.centralkyc.sequence.SequencePartType;

/**
 * @see bw.co.centralkyc.subscription.KycSubscriptionService
 */
@Service("kycSubscriptionService")
@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
public class KycSubscriptionServiceImpl
        extends KycSubscriptionServiceBase {

    private final SequenceGeneratorService sequenceGeneratorService;
    private final OrganisationRepository organisationRepository;
    private static final String SEQUENCE_NAME = "KYC_SUBSCRIPTION_REF";

    public KycSubscriptionServiceImpl(
            KycSubscriptionDao kycSubscriptionDao,
            KycSubscriptionRepository kycSubscriptionRepository,
            SequenceGeneratorService sequenceGeneratorService,
            OrganisationRepository organisationRepository,
            MessageSource messageSource) {

        super(
                kycSubscriptionDao,
                kycSubscriptionRepository,
                messageSource);

        this.sequenceGeneratorService = sequenceGeneratorService;
        this.organisationRepository = organisationRepository;
    }

    /**
     * @see bw.co.centralkyc.subscription.KycSubscriptionService#findById(String)
     */
    @Override
    protected KycSubscriptionDTO handleFindById(String id)
            throws Exception {

        KycSubscription subscription = kycSubscriptionRepository.findById(id).orElse(null);

        return this.getKycSubscriptionDao().toKycSubscriptionDTO(subscription);
    }

    /**
     * @see bw.co.centralkyc.subscription.KycSubscriptionService#save(KycSubscriptionDTO)
     */
    @Override
    protected KycSubscriptionDTO handleSave(KycSubscriptionDTO subscription)
            throws Exception {

        KycSubscription entity = kycSubscriptionDao.kycSubscriptionDTOToEntity(subscription);

        if (StringUtils.isBlank(subscription.getRef())) {

            SequenceGenerator sequenceGenerator = sequenceGeneratorService.findByName(SEQUENCE_NAME);

            if (sequenceGenerator == null) {

                sequenceGenerator = new SequenceGenerator();
                sequenceGenerator.setName(SEQUENCE_NAME);

                Collection<SequencePart> sequenceParts = new HashSet<SequencePart>();
                
                SequencePart counterPart = new SequencePart();
                counterPart.setPosition(0);
                counterPart.setType(SequencePartType.STATIC);
                counterPart.setInitialValue("KYC-");
                counterPart.setName(SEQUENCE_NAME + "_PREFIX");
                counterPart.setSequenceGenerator(sequenceGenerator);
                sequenceParts.add(counterPart);

                counterPart = new SequencePart();
                counterPart.setPosition(1);
                counterPart.setType(SequencePartType.COUNTER);
                counterPart.setName(SEQUENCE_NAME + "_COUNTER");
                counterPart.setInitialValue("000000");
                counterPart.setSequenceGenerator(sequenceGenerator);
                sequenceParts.add(counterPart);

                sequenceGenerator.setSequenceParts(sequenceParts);
                sequenceGenerator = sequenceGeneratorService.save(sequenceGenerator);
            }

            String nextRef = sequenceGeneratorService.generateNextSequenceValue(SEQUENCE_NAME, true);
            entity.setRef(nextRef);
        }

        entity = kycSubscriptionRepository.save(entity);

        return kycSubscriptionDao.toKycSubscriptionDTO(entity);
    }

    /**
     * @see bw.co.centralkyc.subscription.KycSubscriptionService#remove(String)
     */
    @Override
    protected boolean handleRemove(String id)
            throws Exception {

        kycSubscriptionRepository.deleteById(id);
        return true;
    }

    /**
     * @see bw.co.centralkyc.subscription.KycSubscriptionService#getAll()
     */
    @Override
    protected Collection<KycSubscriptionDTO> handleGetAll()
            throws Exception {

        Collection<KycSubscription> subscriptions = kycSubscriptionRepository.findAll();
        return kycSubscriptionDao.toKycSubscriptionDTOCollection(subscriptions);
    }

    private Specification<KycSubscription> createSearchSpecification(String criteria) {
        return (root, query, builder) -> {
            String likeCriteria = "%" + criteria.toLowerCase() + "%";
            return builder.or(
                    builder.like(builder.lower(root.get("ref")), likeCriteria),
                    builder.like(builder.lower(root.get("organisation").get("name")), likeCriteria)
            );
        };
    }

    /**
     * @see bw.co.centralkyc.subscription.KycSubscriptionService#search(String)
     */
    @Override
    protected Collection<KycSubscriptionDTO> handleSearch(String criteria)
            throws Exception {

        Specification<KycSubscription> specification = createSearchSpecification(criteria);

        Collection<KycSubscription> subscriptions = kycSubscriptionRepository.findAll(specification);
        return kycSubscriptionDao.toKycSubscriptionDTOCollection(subscriptions);
    }

    /**
     * @see bw.co.centralkyc.subscription.KycSubscriptionService#getAll(Integer,
     *      Integer)
     */
    @Override
    protected Page<KycSubscriptionDTO> handleGetAll(Integer pageNumber, Integer pageSize)
            throws Exception {

        Page<KycSubscription> subscriptions = kycSubscriptionRepository.findAll(PageRequest.of(pageNumber, pageSize));

        return subscriptions.map(arg0 -> kycSubscriptionDao.toKycSubscriptionDTO(arg0));
    }

    /**
     * @see bw.co.centralkyc.subscription.KycSubscriptionService#search(String,
     *      Integer, Integer)
     */
    @Override
    protected Page<KycSubscriptionDTO> handleSearch(String criteria, Integer pageNumber, Integer pageSize)
            throws Exception {
        Specification<KycSubscription> specification = createSearchSpecification(criteria);

        Page<KycSubscription> subscriptions = kycSubscriptionRepository.findAll(specification, PageRequest.of(pageNumber, pageSize));

        return subscriptions.map(arg0 -> kycSubscriptionDao.toKycSubscriptionDTO(arg0));
    }

}