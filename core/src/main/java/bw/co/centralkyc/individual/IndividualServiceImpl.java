// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.centralkyc::individual::IndividualService
 * STEREOTYPE:  Service
 */
package bw.co.centralkyc.individual;

import java.util.Collection;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.centralkyc.individual.IndividualService
 */
@Service("individualService")
@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
public class IndividualServiceImpl
        extends IndividualServiceBase {
    public IndividualServiceImpl(
            IndividualDao individualDao,
            IndividualRepository individualRepository,
            MessageSource messageSource) {

        super(
                individualDao,
                individualRepository,
                messageSource);
    }

    /**
     * @see bw.co.centralkyc.individual.IndividualService#findById(String)
     */
    @Override
    protected IndividualDTO handleFindById(String id)
            throws Exception {

        Individual individual = individualRepository.getReferenceById(id);
        return individualDao.toIndividualDTO(individual);
    }

    /**
     * @see bw.co.centralkyc.individual.IndividualService#getAll()
     */
    @Override
    protected Collection<IndividualListDTO> handleGetAll()
            throws Exception {

        return individualDao.toIndividualListDTOCollection(individualRepository.findAll());
    }

    /**
     * @see bw.co.centralkyc.individual.IndividualService#getAll(Integer, Integer)
     */
    @Override
    protected Page<IndividualListDTO> handleGetAll(Integer pageNumber, Integer pageSize)
            throws Exception {

        PageRequest pageRequest = PageRequest.of(pageNumber, pageSize);
        Page<Individual> individuals = individualRepository.findAll(pageRequest);

        return individuals.map(individual -> individualDao.toIndividualListDTO(individual));
    }

    /**
     * @see bw.co.centralkyc.individual.IndividualService#remove(String)
     */
    @Override
    protected boolean handleRemove(String id)
            throws Exception {

        Individual individual = individualRepository.findById(id)
                .orElseThrow(() -> new IndividualServiceException("Individual not found with id: " + id));

        individualRepository.delete(individual);
        return true;
    }

    /**
     * @see bw.co.centralkyc.individual.IndividualService#save(IndividualDTO)
     */
    @Override
    protected IndividualDTO handleSave(IndividualDTO individual)
            throws Exception {

        Individual entity = individualDao.individualDTOToEntity(individual);
        entity = individualRepository.save(entity);

        return individualDao.toIndividualDTO(entity);
    }

    private Specification<Individual> createSpecification(String criteria) {
        return (root, query, builder) -> {
            String likeCriteria = "%" + criteria.toLowerCase() + "%";
            return builder.or(
                    builder.like(builder.lower(root.get("firstName")), likeCriteria),
                    builder.like(builder.lower(root.get("surname")), likeCriteria),
                    // builder.like(builder.lower(root.get("email")), likeCriteria),
                    builder.like(builder.lower(root.get("identityNo")), likeCriteria));
        };
    }

    /**
     * @see bw.co.centralkyc.individual.IndividualService#search(String)
     */
    @Override
    protected Collection<IndividualListDTO> handleSearch(String criteria)
            throws Exception {

        Specification<Individual> spec = createSpecification(criteria);

        return individualDao.toIndividualListDTOCollection(individualRepository.findAll(spec));
    }

    /**
     * @see bw.co.centralkyc.individual.IndividualService#search(Integer, Integer,
     *      String)
     */
    @Override
    protected Page<IndividualListDTO> handleSearch(Integer pageNumber, Integer pageSize, String criteria)
            throws Exception {

        Specification<Individual> spec = createSpecification(criteria);

        PageRequest pageRequest = PageRequest.of(pageNumber, pageSize);
        Page<Individual> individuals = individualRepository.findAll(spec, pageRequest);

        return individuals.map(individual -> individualDao.toIndividualListDTO(individual));
    }

}