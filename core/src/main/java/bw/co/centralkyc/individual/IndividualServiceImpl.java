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

import org.apache.commons.lang3.StringUtils;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import bw.co.centralkyc.PropertySearchOrder;
import bw.co.centralkyc.SearchObject;

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

    private Specification<Individual> createSpecification(IndividualSearchCriteria criteria) {

        Specification<Individual> spec = Specification.unrestricted();

        if(StringUtils.isNotBlank(criteria.getEmailAddress())) {

            spec = spec.and((root, query, builder) ->
                    builder.equal(builder.lower(root.get("email")), criteria.getEmailAddress().toLowerCase()));

        }

        if(StringUtils.isNotBlank(criteria.getFirstName())) {

            spec = spec.and((root, query, builder) ->
                    builder.equal(builder.lower(root.get("firstName")), criteria.getFirstName().toLowerCase()));

        }

        if(StringUtils.isNotBlank(criteria.getSurname())) {

            spec = spec.and((root, query, builder) ->
                    builder.equal(builder.lower(root.get("surname")), criteria.getSurname().toLowerCase()));

        }

        if(StringUtils.isNotBlank(criteria.getMiddleName())) {

            spec = spec.and((root, query, builder) ->
                    builder.equal(builder.lower(root.get("middleName")), criteria.getMiddleName().toLowerCase()));

        }

        if(StringUtils.isNotBlank(criteria.getIdentityNo())) {

            spec = spec.and((root, query, builder) ->
                    builder.equal(builder.lower(root.get("identityNo")), criteria.getIdentityNo().toLowerCase()));

        }

        return spec;
    }

    /**
     * @see bw.co.centralkyc.individual.IndividualService#search(String)
     */
    @Override
    protected Collection<IndividualListDTO> handleSearch(IndividualSearchCriteria criteria, PropertySearchOrder orderings)
            throws Exception {

        Specification<Individual> spec = createSpecification(criteria);

        return individualDao.toIndividualListDTOCollection(individualRepository.findAll(spec));
    }

    /**
     * @see bw.co.centralkyc.individual.IndividualService#search(Integer, Integer,
     *      String)
     */
    @Override
    protected Page<IndividualListDTO> handleSearch(SearchObject<IndividualSearchCriteria> criteria)
            throws Exception {

        Specification<Individual> spec = createSpecification(criteria.getCriteria());

        PageRequest pageRequest = PageRequest.of(criteria.getPageNumber(), criteria.getPageSize());
        Page<Individual> individuals = individualRepository.findAll(spec, pageRequest);

        return individuals.map(individual -> individualDao.toIndividualListDTO(individual));
    }

    @Override
    protected Collection<IndividualDTO> handleGetOrganisationClients(String organisationId) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'handleGetOrganisationClients'");
    }

    @Override
    protected Collection<IndividualDTO> handleGetOrganisationClients(String organisationId, Integer pageNumber,
            Integer pageSize) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'handleGetOrganisationClients'");
    }

}