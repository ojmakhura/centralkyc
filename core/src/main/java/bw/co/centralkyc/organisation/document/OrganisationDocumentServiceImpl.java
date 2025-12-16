// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.centralkyc::organisation::document::OrganisationDocumentService
 * STEREOTYPE:  Service
 */
package bw.co.centralkyc.organisation.document;

import bw.co.centralkyc.PropertySearchOrder;
import bw.co.centralkyc.SearchObject;
import bw.co.centralkyc.document.DocumentDao;
import bw.co.centralkyc.document.DocumentRepository;
import bw.co.centralkyc.individual.IndividualDao;
import bw.co.centralkyc.individual.IndividualRepository;
import bw.co.centralkyc.organisation.OrganisationDao;
import bw.co.centralkyc.organisation.OrganisationRepository;
import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.centralkyc.organisation.document.OrganisationDocumentService
 */
@Service("organisationDocumentService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class OrganisationDocumentServiceImpl
    extends OrganisationDocumentServiceBase
{
    public OrganisationDocumentServiceImpl(
        OrganisationDocumentDao organisationDocumentDao,
        OrganisationDocumentRepository organisationDocumentRepository,
        IndividualDao individualDao,
        IndividualRepository individualRepository,
        OrganisationDao organisationDao,
        OrganisationRepository organisationRepository,
        DocumentDao documentDao,
        DocumentRepository documentRepository,
        MessageSource messageSource
    ) {
        
        super(
            organisationDocumentDao,
            organisationDocumentRepository,
            individualDao,
            individualRepository,
            organisationDao,
            organisationRepository,
            documentDao,
            documentRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.centralkyc.organisation.document.OrganisationDocumentService#findById(String)
     */
    @Override
    protected OrganisationDocumentDTO handleFindById(String id)
        throws Exception
    {
        // TODO implement protected  OrganisationDocumentDTO handleFindById(String id)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.document.OrganisationDocumentService.handleFindById(String id) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.document.OrganisationDocumentService#save(OrganisationDocumentDTO)
     */
    @Override
    protected OrganisationDocumentDTO handleSave(OrganisationDocumentDTO clientRequest)
        throws Exception
    {
        // TODO implement protected  OrganisationDocumentDTO handleSave(OrganisationDocumentDTO clientRequest)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.document.OrganisationDocumentService.handleSave(OrganisationDocumentDTO clientRequest) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.document.OrganisationDocumentService#remove(String)
     */
    @Override
    protected boolean handleRemove(String id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(String id)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.document.OrganisationDocumentService.handleRemove(String id) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.document.OrganisationDocumentService#getAll()
     */
    @Override
    protected Collection<OrganisationDocumentDTO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<OrganisationDocumentDTO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.document.OrganisationDocumentService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.document.OrganisationDocumentService#search(OrganisationDocumentSearchCriteria, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<OrganisationDocumentDTO> handleSearch(OrganisationDocumentSearchCriteria criteria, Set<PropertySearchOrder> sortProperties)
        throws Exception
    {
        // TODO implement protected  Collection<OrganisationDocumentDTO> handleSearch(OrganisationDocumentSearchCriteria criteria, Set<PropertySearchOrder> sortProperties)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.document.OrganisationDocumentService.handleSearch(OrganisationDocumentSearchCriteria criteria, Set<PropertySearchOrder> sortProperties) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.document.OrganisationDocumentService#getAll(Integer, Integer)
     */
    @Override
    protected Page<OrganisationDocumentDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throws Exception
    {
        // TODO implement protected  Page<OrganisationDocumentDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.document.OrganisationDocumentService.handleGetAll(Integer pageNumber, Integer pageSize) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.document.OrganisationDocumentService#search(SearchObject<OrganisationDocumentSearchCriteria>)
     */
    @Override
    protected Page<OrganisationDocumentDTO> handleSearch(SearchObject<OrganisationDocumentSearchCriteria> criteria)
        throws Exception
    {
        // TODO implement protected  Page<OrganisationDocumentDTO> handleSearch(SearchObject<OrganisationDocumentSearchCriteria> criteria)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.document.OrganisationDocumentService.handleSearch(SearchObject<OrganisationDocumentSearchCriteria> criteria) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.document.OrganisationDocumentService#findByOrganisation(String)
     */
    @Override
    protected Collection<OrganisationDocumentDTO> handleFindByOrganisation(String organisationId)
        throws Exception
    {
        // TODO implement protected  Collection<OrganisationDocumentDTO> handleFindByOrganisation(String organisationId)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.document.OrganisationDocumentService.handleFindByOrganisation(String organisationId) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.document.OrganisationDocumentService#findByOrganisation(String, Integer, Integer)
     */
    @Override
    protected Page<OrganisationDocumentDTO> handleFindByOrganisation(String organisationId, Integer pageNumber, Integer pageSize)
        throws Exception
    {
        // TODO implement protected  Page<OrganisationDocumentDTO> handleFindByOrganisation(String organisationId, Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.document.OrganisationDocumentService.handleFindByOrganisation(String organisationId, Integer pageNumber, Integer pageSize) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.document.OrganisationDocumentService#findByStatus(OrganisationDocumentStatus)
     */
    @Override
    protected Collection<OrganisationDocumentDTO> handleFindByStatus(OrganisationDocumentStatus status)
        throws Exception
    {
        // TODO implement protected  Collection<OrganisationDocumentDTO> handleFindByStatus(OrganisationDocumentStatus status)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.document.OrganisationDocumentService.handleFindByStatus(OrganisationDocumentStatus status) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.document.OrganisationDocumentService#findByStatus(OrganisationDocumentStatus, Integer, Integer)
     */
    @Override
    protected Page<OrganisationDocumentDTO> handleFindByStatus(OrganisationDocumentStatus status, Integer pageNumber, Integer pageSize)
        throws Exception
    {
        // TODO implement protected  Page<OrganisationDocumentDTO> handleFindByStatus(OrganisationDocumentStatus status, Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.document.OrganisationDocumentService.handleFindByStatus(OrganisationDocumentStatus status, Integer pageNumber, Integer pageSize) Not implemented!");
    }

}