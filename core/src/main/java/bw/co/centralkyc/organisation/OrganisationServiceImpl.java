// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.centralkyc::organisation::OrganisationService
 * STEREOTYPE:  Service
 */
package bw.co.centralkyc.organisation;

import java.util.Collection;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import bw.co.centralkyc.PropertySearchOrder;
import bw.co.centralkyc.SearchObject;

/**
 * @see bw.co.centralkyc.organisation.OrganisationService
 */
@Service("organisationService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class OrganisationServiceImpl
    extends OrganisationServiceBase
{
    public OrganisationServiceImpl(
        OrganisationDao organisationDao,
        OrganisationRepository organisationRepository,
        MessageSource messageSource
    ) {
        
        super(
            organisationDao,
            organisationRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.centralkyc.organisation.OrganisationService#findById(String)
     */
    @Override
    protected OrganisationDTO handleFindById(String id)
        throws Exception
    {

        Organisation org = organisationRepository.getReferenceById(id);
        org = organisationRepository.save(org);

        return organisationDao.toOrganisationDTO(org);
    }

    /**
     * @see bw.co.centralkyc.organisation.OrganisationService#getAll()
     */
    @Override
    protected Collection<OrganisationListDTO> handleGetAll()
        throws Exception
    {

        Collection<Organisation> orgs = organisationRepository.findAll();
        return organisationDao.toOrganisationListDTOCollection(orgs);

    }

    /**
     * @see bw.co.centralkyc.organisation.OrganisationService#getAll(Integer, Integer)
     */
    @Override
    protected Page<OrganisationListDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throws Exception
    {

        Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by(Direction.ASC, "name"));
        Page<Organisation> page = organisationRepository.findAll(pageable);

        return page.map(org -> organisationDao.toOrganisationListDTO(org));
    }

    /**
     * @see bw.co.centralkyc.organisation.OrganisationService#remove(String)
     */
    @Override
    protected boolean handleRemove(String id)
        throws Exception
    {
        organisationRepository.deleteById(id);
        return true;
    }

    /**
     * @see bw.co.centralkyc.organisation.OrganisationService#save(OrganisationDTO)
     */
    @Override
    protected OrganisationDTO handleSave(OrganisationDTO organisation)
        throws Exception
    {
        Organisation org = organisationDao.organisationDTOToEntity(organisation);
        org = organisationRepository.save(org);

        return organisationDao.toOrganisationDTO(org);
    }

    private Specification<Organisation> createSpecification(OrganisationSearchCriteria criteria) {

        Specification<Organisation> spec = null;

        if(criteria == null) {
            return spec;
        }

        if(StringUtils.isNotBlank(criteria.getId())) {

            Specification<Organisation>  tmp = ((root, query, builder) ->
                builder.equal(root.get("id"), criteria.getId()));
            spec = spec == null ? tmp : spec.and(tmp);

        }

        if (StringUtils.isNotBlank(criteria.getName())) {
            Specification<Organisation>  tmp = ((root, query, builder) ->
                builder.like(builder.upper(root.get("name")), "%" + criteria.getName().toUpperCase() + "%"));
            spec = spec == null ? tmp : spec.and(tmp);
        }

        if (StringUtils.isNotBlank(criteria.getRegistrationNo())) {
            Specification<Organisation>  tmp = ((root, query, builder) ->
                builder.equal(root.get("registrationNo"), criteria.getRegistrationNo()));
            spec = spec == null ? tmp : spec.and(tmp);
        }

        if(StringUtils.isNotBlank(criteria.getContactEmailAddress())) {
            Specification<Organisation>  tmp = ((root, query, builder) ->
                builder.like(builder.upper(root.get("contactEmailAddress")), "%" + criteria.getContactEmailAddress().toUpperCase() + "%"));
            spec = spec == null ? tmp : spec.and(tmp);
        }

        if(criteria.getStatus() != null) {
            Specification<Organisation>  tmp = ((root, query, builder) ->
                builder.equal(root.get("status"), criteria.getStatus()));
            spec = spec == null ? tmp : spec.and(tmp);
        }

        return spec;
    }

    /**
     * @see bw.co.centralkyc.organisation.OrganisationService#search(String)
     */
    @Override
    protected Collection<OrganisationListDTO> handleSearch(OrganisationSearchCriteria criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {
        Specification<Organisation> spec = createSpecification(criteria);
        Collection<Organisation> orgs = organisationRepository.findAll(spec, Sort.by(Direction.ASC, "name"));

        return organisationDao.toOrganisationListDTOCollection(orgs);

    }

    /**
     * @see bw.co.centralkyc.organisation.OrganisationService#search(Integer, Integer, String)
     */
    @Override
    protected Page<OrganisationListDTO> handleSearch(SearchObject<OrganisationSearchCriteria> criteria)
        throws Exception
    {
        Specification<Organisation> spec = createSpecification(criteria.getCriteria());
        Pageable pageable = PageRequest.of(criteria.getPageNumber(), criteria.getPageSize(), Sort.by(Direction.ASC, "name"));
        Page<Organisation> page = organisationRepository.findAll(spec, pageable);

        return page.map(org -> organisationDao.toOrganisationListDTO(org));
    }

}