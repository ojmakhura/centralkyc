// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.centralkyc::organisation::client::ClientRequestService
 * STEREOTYPE:  Service
 */
package bw.co.centralkyc.organisation.client;

import bw.co.centralkyc.PropertySearchOrder;
import bw.co.centralkyc.SearchObject;
import bw.co.centralkyc.document.DocumentDao;
import bw.co.centralkyc.document.DocumentRepository;
import bw.co.centralkyc.individual.IndividualDao;
import bw.co.centralkyc.individual.IndividualRepository;
import bw.co.centralkyc.organisation.OrganisationDao;
import bw.co.centralkyc.organisation.OrganisationRepository;

import java.io.InputStream;
import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.centralkyc.organisation.client.ClientRequestService
 */
@Service("clientRequestService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class ClientRequestServiceImpl
    extends ClientRequestServiceBase
{
    

    public ClientRequestServiceImpl(ClientRequestDao clientRequestDao, ClientRequestRepository clientRequestRepository,
            IndividualDao individualDao, IndividualRepository individualRepository, OrganisationDao organisationDao,
            OrganisationRepository organisationRepository, DocumentDao documentDao,
            DocumentRepository documentRepository, MessageSource messageSource) {
        super(clientRequestDao, clientRequestRepository, individualDao, individualRepository, organisationDao,
                organisationRepository, documentDao, documentRepository, messageSource);
        //TODO Auto-generated constructor stub
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#findById(String)
     */
    @Override
    protected ClientRequestDTO handleFindById(String id)
        throws Exception
    {
        // TODO implement protected  ClientRequestDTO handleFindById(String id)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.client.ClientRequestService.handleFindById(String id) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#save(ClientRequestDTO)
     */
    @Override
    protected ClientRequestDTO handleSave(ClientRequestDTO clientRequest)
        throws Exception
    {
        // TODO implement protected  ClientRequestDTO handleSave(ClientRequestDTO clientRequest)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.client.ClientRequestService.handleSave(ClientRequestDTO clientRequest) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#remove(String)
     */
    @Override
    protected boolean handleRemove(String id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(String id)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.client.ClientRequestService.handleRemove(String id) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#getAll()
     */
    @Override
    protected Collection<ClientRequestDTO> handleGetAll()
        throws Exception
    {
        // TODO implement protected  Collection<ClientRequestDTO> handleGetAll()
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.client.ClientRequestService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#search(ClientRequestSearchCriteria, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<ClientRequestDTO> handleSearch(ClientRequestSearchCriteria criteria, Set<PropertySearchOrder> sortProperties)
        throws Exception
    {
        // TODO implement protected  Collection<ClientRequestDTO> handleSearch(ClientRequestSearchCriteria criteria, Set<PropertySearchOrder> sortProperties)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.client.ClientRequestService.handleSearch(ClientRequestSearchCriteria criteria, Set<PropertySearchOrder> sortProperties) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#getAll(Integer, Integer)
     */
    @Override
    protected Page<ClientRequestDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throws Exception
    {
        // TODO implement protected  Page<ClientRequestDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.client.ClientRequestService.handleGetAll(Integer pageNumber, Integer pageSize) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#search(SearchObject<ClientRequestSearchCriteria>)
     */
    @Override
    protected Page<ClientRequestDTO> handleSearch(SearchObject<ClientRequestSearchCriteria> criteria)
        throws Exception
    {
        // TODO implement protected  Page<ClientRequestDTO> handleSearch(SearchObject<ClientRequestSearchCriteria> criteria)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.client.ClientRequestService.handleSearch(SearchObject<ClientRequestSearchCriteria> criteria) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#findByOrganisation(String)
     */
    @Override
    protected Collection<ClientRequestDTO> handleFindByOrganisation(String organisationId)
        throws Exception
    {

        return clientRequestRepository.findByOrganisationId(organisationId);
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#findByOrganisation(String, Integer, Integer)
     */
    @Override
    protected Page<ClientRequestDTO> handleFindByOrganisation(String organisationId, Integer pageNumber, Integer pageSize)
        throws Exception
    {
        return clientRequestRepository.findByOrganisationId(organisationId, PageRequest.of(pageNumber, pageSize));
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#findByStatus(ClientRequestStatus)
     */
    @Override
    protected Collection<ClientRequestDTO> handleFindByStatus(ClientRequestStatus status)
        throws Exception
    {

        return clientRequestRepository.findByStatuses(Set.of(status));
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#uploadRequests(InputStream)
     */
    @Override
    protected Collection<ClientRequestDTO> handleUploadRequests(InputStream inputStream, String user, String organisationId)
        throws Exception
    {
        // TODO implement protected  Collection<ClientRequestDTO> handleUploadRequests(InputStream inputStream)
        throw new UnsupportedOperationException("bw.co.centralkyc.organisation.client.ClientRequestService.handleUploadRequests(InputStream inputStream) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#findByIndividual(String)
     */
    @Override
    protected Collection<ClientRequestDTO> handleFindByIndividual(String individualId)
        throws Exception
    {

        return clientRequestRepository.findByIndividualId(individualId);
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#findByIndividual(String, Integer, Integer)
     */
    @Override
    protected Page<ClientRequestDTO> handleFindByIndividual(String individualId, Integer pageNumber, Integer pageSize)
        throws Exception
    {
        return clientRequestRepository.findByIndividualId(individualId, PageRequest.of(pageNumber, pageSize));
    }

    @Override
    protected Collection<ClientRequestDTO> handleFindByDocument(String documentId) throws Exception {

        return clientRequestRepository.findByDocumentId(documentId);
    }

    @Override
    protected Page<ClientRequestDTO> handleFindByDocument(String documentId, Integer pageNumber, Integer pageSize)
            throws Exception {
        return clientRequestRepository.findByDocumentId(documentId, PageRequest.of(pageNumber, pageSize));
    }

    @Override
    protected Page<ClientRequestDTO> handleFindByStatus(ClientRequestStatus status, Integer pageNumber,
            Integer pageSize) throws Exception {
        return clientRequestRepository.findByStatuses(Set.of(status), PageRequest.of(pageNumber, pageSize));
    }

}