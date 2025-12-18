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
import bw.co.centralkyc.document.Document;
import bw.co.centralkyc.document.DocumentDTO;
import bw.co.centralkyc.document.DocumentDao;
import bw.co.centralkyc.document.DocumentRepository;
import bw.co.centralkyc.individual.Individual;
import bw.co.centralkyc.individual.IndividualDao;
import bw.co.centralkyc.individual.IndividualIdentityType;
import bw.co.centralkyc.individual.IndividualRepository;
import bw.co.centralkyc.individual.Sex;
import bw.co.centralkyc.kyc.KycComplianceStatus;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
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
@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
public class ClientRequestServiceImpl
        extends ClientRequestServiceBase {

    public ClientRequestServiceImpl(ClientRequestDao clientRequestDao, ClientRequestRepository clientRequestRepository,
            IndividualDao individualDao, IndividualRepository individualRepository, DocumentDao documentDao,
            DocumentRepository documentRepository, MessageSource messageSource) {
        super(clientRequestDao, clientRequestRepository, individualDao, individualRepository, documentDao, documentRepository, messageSource);
        // TODO Auto-generated constructor stub
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#findById(String)
     */
    @Override
    protected ClientRequestDTO handleFindById(String id)
            throws Exception {
        
        ClientRequest clientRequest = clientRequestRepository.findById(id).orElseThrow(() -> new ClientRequestServiceException("ClientRequest not found"));

        return clientRequestDao.toClientRequestDTO(clientRequest);
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#save(ClientRequestDTO)
     */
    @Override
    protected ClientRequestDTO handleSave(ClientRequestDTO clientRequest)
            throws Exception {

        ClientRequest clientRequestEntity = clientRequestDao.clientRequestDTOToEntity(clientRequest);
        clientRequestEntity = clientRequestRepository.save(clientRequestEntity);
        return clientRequestDao.toClientRequestDTO(clientRequestEntity);
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#remove(String)
     */
    @Override
    protected boolean handleRemove(String id)
            throws Exception {

        if(clientRequestRepository.existsById(id)) {
            clientRequestRepository.deleteById(id);
            return true;
        }
        
        throw new ClientRequestServiceException("ClientRequest not found");
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#getAll()
     */
    @Override
    protected Collection<ClientRequestDTO> handleGetAll()
            throws Exception {
        // TODO implement protected Collection<ClientRequestDTO> handleGetAll()
        throw new UnsupportedOperationException(
                "bw.co.centralkyc.organisation.client.ClientRequestService.handleGetAll() Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#search(ClientRequestSearchCriteria,
     *      Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<ClientRequestDTO> handleSearch(ClientRequestSearchCriteria criteria,
            Set<PropertySearchOrder> sortProperties)
            throws Exception {
        // TODO implement protected Collection<ClientRequestDTO>
        // handleSearch(ClientRequestSearchCriteria criteria, Set<PropertySearchOrder>
        // sortProperties)
        throw new UnsupportedOperationException(
                "bw.co.centralkyc.organisation.client.ClientRequestService.handleSearch(ClientRequestSearchCriteria criteria, Set<PropertySearchOrder> sortProperties) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#getAll(Integer,
     *      Integer)
     */
    @Override
    protected Page<ClientRequestDTO> handleGetAll(Integer pageNumber, Integer pageSize)
            throws Exception {
        // TODO implement protected Page<ClientRequestDTO> handleGetAll(Integer
        // pageNumber, Integer pageSize)
        throw new UnsupportedOperationException(
                "bw.co.centralkyc.organisation.client.ClientRequestService.handleGetAll(Integer pageNumber, Integer pageSize) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#search(SearchObject<ClientRequestSearchCriteria>)
     */
    @Override
    protected Page<ClientRequestDTO> handleSearch(SearchObject<ClientRequestSearchCriteria> criteria)
            throws Exception {
        // TODO implement protected Page<ClientRequestDTO>
        // handleSearch(SearchObject<ClientRequestSearchCriteria> criteria)
        throw new UnsupportedOperationException(
                "bw.co.centralkyc.organisation.client.ClientRequestService.handleSearch(SearchObject<ClientRequestSearchCriteria> criteria) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#findByOrganisation(String)
     */
    @Override
    protected Collection<ClientRequestDTO> handleFindByOrganisation(String organisationId)
            throws Exception {

        return clientRequestRepository.findByOrgId(organisationId);
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#findByOrganisation(String,
     *      Integer, Integer)
     */
    @Override
    protected Page<ClientRequestDTO> handleFindByOrganisation(String organisationId, Integer pageNumber,
            Integer pageSize)
            throws Exception {
        return null; //clientRequestRepository.findByOrganisationId(organisationId, PageRequest.of(pageNumber, pageSize));
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#findByStatus(ClientRequestStatus)
     */
    @Override
    protected Collection<ClientRequestDTO> handleFindByStatus(ClientRequestStatus status)
            throws Exception {

        return clientRequestRepository.findByStatuses(Set.of(status));
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#uploadRequests(InputStream)
     */
    @Override
    protected Page<ClientRequestDTO> handleUploadRequests(InputStream inputStream, String user,
            String organisationId, DocumentDTO document)
            throws Exception {
        List<ClientRequest> clientRequests = new ArrayList<>();

        try {
            // Try to detect if it's Excel or CSV by attempting to read as Excel first
            inputStream.mark(Integer.MAX_VALUE); // Mark the stream so we can reset if needed

            Document d = documentDao.documentDTOToEntity(document);

            try {
                // Try reading as Excel (.xlsx)
                Workbook workbook = new XSSFWorkbook(inputStream);
                clientRequests = processExcelFile(workbook, user, organisationId, d);

                // clientRequests = clientRequestRepository.saveAll(clientRequests);
                workbook.close();
            } catch (Exception excelException) {
                // Reset the stream and try as .xls
                try {
                    inputStream.reset();
                    Workbook workbook = new HSSFWorkbook(inputStream);
                    clientRequests = processExcelFile(workbook, user, organisationId, d);
                    workbook.close();
                } catch (Exception xlsException) {
                    // Reset and try as CSV
                    inputStream.reset();
                    clientRequests = processCsvFile(inputStream, user, organisationId, d);
                }
            }
        } catch (IOException e) {
            throw new Exception("Error reading file: " + e.getMessage(), e);
        }

        clientRequests = clientRequestRepository.saveAll(clientRequests);

        return null; // clientRequestRepository.findByOrganisationId(organisationId, 
                //PageRequest.of(0, 10));
    }

    /**
     * Save individual entity and create client request
     */
    private ClientRequest saveIndividualAndRequest(Individual individual, String user, String organisationId, Document document) {
        // Save individual entity

        Individual savedIndividual = individualRepository.findByIdentityNoAndIdentityType(
                individual.getIdentityNo(), individual.getIdentityType());

        if( savedIndividual == null) {
            savedIndividual = individual;

            savedIndividual.setCreatedAt(LocalDateTime.now());
            savedIndividual.setCreatedBy(user);
            individual.setKycStatus(KycComplianceStatus.ABSENT);
        } else {
            savedIndividual.setModifiedAt(LocalDateTime.now());
            savedIndividual.setModifiedBy(user);
        }

        // Individual savedIndividual = individualRepository.save(individual);

        // Create client request
        ClientRequest clientRequest = new ClientRequest();
        clientRequest.setIndividual(savedIndividual);

        // Set organisation
        // Organisation organisation = organisationRepository.getReferenceById(organisationId);
        // clientRequest.setOrganisation(organisation);

        // Set status and audit fields
        clientRequest.setStatus(ClientRequestStatus.PENDING);
        clientRequest.setCreatedBy(user);
        clientRequest.setCreatedAt(java.time.LocalDateTime.now());
        clientRequest.setDocument(document);

        // Save client request
        // ClientRequest savedRequest = clientRequestRepository.save(clientRequest);

        // Convert to DTO
        return clientRequest;
    }

    /**
     * Process Excel file and extract Individual entities
     * Expected columns: First Name, Middle Name, Surname, Identity Type, Identity
     * No,
     * Email Address, Phone Numbers, Physical Address, Postal Address
     */
    private List<ClientRequest> processExcelFile(Workbook workbook, String user, String organisationId, Document document) {
        List<ClientRequest> clientRequests = new ArrayList<>();
        Sheet sheet = workbook.getSheetAt(0); // Read first sheet
        Iterator<Row> rowIterator = sheet.iterator();

        // Skip header row if exists
        if (rowIterator.hasNext()) {
            rowIterator.next();
        }

        while (rowIterator.hasNext()) {
            Row row = rowIterator.next();
            Individual individual = extractIndividualFromRow(row);
            if (individual != null) {
                ClientRequest request = saveIndividualAndRequest(individual, user, organisationId, document);
                clientRequests.add(request);
            }
        }

        return clientRequests;
    }

    /**
     * Process CSV file and extract Individual entities
     * Expected columns: First Name, Middle Name, Surname, Identity Type, Identity
     * No,
     * Email Address, Phone Numbers, Physical Address, Postal Address
     */
    private List<ClientRequest> processCsvFile(InputStream inputStream, String user, String organisationId, Document document)
            throws IOException {
        List<ClientRequest> clientRequests = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
                CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT.builder()
                        .setHeader()
                        .setSkipHeaderRecord(true)
                        .setIgnoreHeaderCase(true)
                        .setTrim(true)
                        .build())) {

            for (CSVRecord csvRecord : csvParser) {
                Individual individual = extractIndividualFromCsvRecord(csvRecord);
                if (individual != null) {
                    ClientRequest request = saveIndividualAndRequest(individual, user, organisationId, document);
                    
                    clientRequests.add(request);
                }
            }
        }

        return clientRequests;
    }

    /**
     * Extract Individual entity from Excel row
     * Expected columns: First Name, Middle Name, Surname, Identity Type, Identity
     * No,
     * Email Address, Phone Numbers, Physical Address, Postal Address
     */
    private Individual extractIndividualFromRow(Row row) {
        try {
            Individual individual = new Individual();

            // Convenience helper for reading string values
            Function<Integer, String> readString = col -> {
                Cell cell = row.getCell(col);
                return (cell != null && cell.getCellType() != CellType.BLANK)
                        ? getCellValueAsString(cell)
                        : null;
            };

            // Read simple fields
            individual.setFirstName(readString.apply(0)); // Mandatory
            individual.setMiddleName(readString.apply(1)); // Optional
            individual.setSurname(readString.apply(2)); // Mandatory

            // Identity Type (Mandatory)
            String identityTypeStr = readString.apply(3);
            if (identityTypeStr != null) {
                individual.setIdentityType(parseIndividualIdentityType(identityTypeStr));
            }

            // Identity No (Mandatory)
            individual.setIdentityNo(readString.apply(4));

            // Email (Optional)
            individual.setEmailAddress(readString.apply(5));

            // Phone numbers (Optional, comma-separated)
            String phoneNumbersStr = readString.apply(6);
            if (phoneNumbersStr != null && !phoneNumbersStr.trim().isEmpty()) {

                Collection<Map> phoneList = Arrays.stream(phoneNumbersStr.split(","))
                        .map(String::trim)
                        .filter(s -> !s.isEmpty())
                        .map(phone -> {
                            Map<String, String> map = new HashMap<>();
                            map.put("number", phone);
                            return map;
                        })
                        .collect(Collectors.toList());

                individual.setPhoneNumbers(phoneList);
            }

            // Physical & postal address
            individual.setPhysicalAddress(readString.apply(7)); // Optional
            individual.setPostalAddress(readString.apply(8)); // Optional

            // Validate mandatory fields
            if (individual.getFirstName() != null &&
                    individual.getSurname() != null &&
                    individual.getIdentityType() != null &&
                    individual.getIdentityNo() != null) {

                return individual;
            }

        } catch (Exception e) {
            System.err.println("Error processing row: " + e.getMessage());
        }

        return null; // Row skipped
    }

    /**
     * Extract Individual entity from CSV record
     * Expected columns: First Name, Middle Name, Surname, Identity Type, Identity
     * No,
     * Email Address, Phone Numbers, Physical Address, Postal Address
     */
    private Individual extractIndividualFromCsvRecord(CSVRecord csvRecord) {
        try {
            Individual individual = new Individual();

            // Column 0: First Name (Mandatory)
            String firstName = csvRecord.isMapped("First Name") ? csvRecord.get("First Name")
                    : (csvRecord.size() > 0 ? csvRecord.get(0) : null);
            if (firstName != null && !firstName.trim().isEmpty()) {
                individual.setFirstName(firstName.trim());
            }

            // Column 1: Middle Name (Optional)
            String middleName = csvRecord.isMapped("Middle Name") ? csvRecord.get("Middle Name")
                    : (csvRecord.size() > 1 ? csvRecord.get(1) : null);
            if (middleName != null && !middleName.trim().isEmpty()) {
                individual.setMiddleName(middleName.trim());
            }

            // Column 2: Surname (Mandatory)
            String surname = csvRecord.isMapped("Surname") ? csvRecord.get("Surname")
                    : (csvRecord.size() > 2 ? csvRecord.get(2) : null);
            if (surname != null && !surname.trim().isEmpty()) {
                individual.setSurname(surname.trim());
            }

            // Column 3: Identity Type (Mandatory)
            String identityTypeStr = csvRecord.isMapped("Identity Type") ? csvRecord.get("Identity Type")
                    : (csvRecord.size() > 3 ? csvRecord.get(3) : null);
            if (identityTypeStr != null && !identityTypeStr.trim().isEmpty()) {
                individual.setIdentityType(parseIndividualIdentityType(identityTypeStr));
            }

            // Column 4: Identity No (Mandatory)
            String identityNo = csvRecord.isMapped("Identity No") ? csvRecord.get("Identity No")
                    : (csvRecord.size() > 4 ? csvRecord.get(4) : null);
            if (identityNo != null && !identityNo.trim().isEmpty()) {
                individual.setIdentityNo(identityNo.trim());
            }

            // Column 5: Email Address (Optional)
            String email = csvRecord.isMapped("Email Address") ? csvRecord.get("Email Address")
                    : (csvRecord.size() > 5 ? csvRecord.get(5) : null);
            if (email != null && !email.trim().isEmpty()) {
                individual.setEmailAddress(email.trim());
            }

            // Column 6: Phone Numbers (Optional - comma-separated)
            String phoneNumbers = csvRecord.isMapped("Phone Numbers") ? csvRecord.get("Phone Numbers")
                    : (csvRecord.size() > 6 ? csvRecord.get(6) : null);
            if (phoneNumbers != null && !phoneNumbers.trim().isEmpty()) {
                @SuppressWarnings({ "rawtypes", "unchecked" })
                Collection phoneList = new ArrayList<>();
                String[] phones = phoneNumbers.split(",");
                for (String phone : phones) {
                    java.util.Map<String, String> phoneMap = new java.util.HashMap<>();
                    phoneMap.put("number", phone.trim());
                    phoneList.add(phoneMap);
                }
                individual.setPhoneNumbers(phoneList);
            }

            // Column 7: Physical Address (Optional)
            String physicalAddress = csvRecord.isMapped("Physical Address") ? csvRecord.get("Physical Address")
                    : (csvRecord.size() > 7 ? csvRecord.get(7) : null);
            if (physicalAddress != null && !physicalAddress.trim().isEmpty()) {
                individual.setPhysicalAddress(physicalAddress.trim());
            }

            // Column 8: Postal Address (Optional)
            String postalAddress = csvRecord.isMapped("Postal Address") ? csvRecord.get("Postal Address")
                    : (csvRecord.size() > 8 ? csvRecord.get(8) : null);
            if (postalAddress != null && !postalAddress.trim().isEmpty()) {
                individual.setPostalAddress(postalAddress.trim());
            }

            // Column 9: Sex (Mandatory)
            String sex = csvRecord.isMapped("Sex") ? csvRecord.get("Sex")
                    : (csvRecord.size() > 9 ? csvRecord.get(9) : null);
            if (sex != null && !sex.trim().isEmpty()) {
                individual.setSex(parseSex(sex));
            }

            // Validate mandatory fields
            if (individual.getFirstName() != null && individual.getSurname() != null
                    && individual.getIdentityNo() != null && individual.getIdentityType() != null) {
                return individual;
            }

        } catch (Exception e) {
            // Log and skip invalid records
            System.err.println("Error processing CSV record: " + e.getMessage());
        }

        return null;
    }



    /**
     * Get cell value as string regardless of cell type
     */
    private String getCellValueAsString(Cell cell) {
        if (cell == null) {
            return null;
        }

        switch (cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue();
            case NUMERIC:
                // Check if it's a date or number
                if (org.apache.poi.ss.usermodel.DateUtil.isCellDateFormatted(cell)) {
                    return cell.getLocalDateTimeCellValue().toString();
                } else {
                    return String.valueOf((long) cell.getNumericCellValue());
                }
            case BOOLEAN:
                return String.valueOf(cell.getBooleanCellValue());
            case FORMULA:
                return cell.getCellFormula();
            default:
                return null;
        }
    }

    /**
     * Parse identity type string to IndividualIdentityType enum
     */
    private IndividualIdentityType parseIndividualIdentityType(String identityTypeStr) {
        if (identityTypeStr == null || identityTypeStr.trim().isEmpty()) {
            return IndividualIdentityType.OMANG; // Default
        }

        try {
            return IndividualIdentityType.fromString(identityTypeStr.trim().toUpperCase());
        } catch (Exception e) {
            return IndividualIdentityType.OMANG; // Default fallback
        }
    }

    private Sex parseSex(String sexStr) {
        if (sexStr == null || sexStr.trim().isEmpty()) {
            throw new ClientRequestServiceException("Sex must be specified");
        }  

        try {

            if("M".equalsIgnoreCase(sexStr.trim())) {

                return Sex.MALE;
            } else if("F".equalsIgnoreCase(sexStr.trim())) {    

                return Sex.FEMALE;
            }

            return Sex.fromString(sexStr.trim().toUpperCase());
        } catch (Exception e) {
            throw new ClientRequestServiceException("Invalid sex value: " + sexStr);
        }
    }
    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#findByIndividual(String)
     */
    @Override
    protected Collection<ClientRequestDTO> handleFindByIndividual(String individualId)
            throws Exception {

        return clientRequestRepository.findByIndividualId(individualId);
    }

    /**
     * @see bw.co.centralkyc.organisation.client.ClientRequestService#findByIndividual(String,
     *      Integer, Integer)
     */
    @Override
    protected Page<ClientRequestDTO> handleFindByIndividual(String individualId, Integer pageNumber, Integer pageSize)
            throws Exception {
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