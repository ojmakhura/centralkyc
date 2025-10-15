// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.centralkyc::settings::SettingsService
 * STEREOTYPE:  Service
 */
package bw.co.centralkyc.settings;

import java.util.Collection;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.centralkyc.settings.SettingsService
 */
@Service("settingsService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class SettingsServiceImpl
    extends SettingsServiceBase
{
    public SettingsServiceImpl(
        SettingsDao settingsDao,
        SettingsRepository settingsRepository,
        MessageSource messageSource
    ) {
        
        super(
            settingsDao,
            settingsRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.centralkyc.settings.SettingsService#findById(String)
     */
    @Override
    protected SettingsDTO handleFindById(String id)
        throws Exception
    {
        throw new UnsupportedOperationException("bw.co.centralkyc.settings.SettingsService.handleFindById(String id) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.settings.SettingsService#save(SettingsDTO)
     */
    @Override
    protected SettingsDTO handleSave(SettingsDTO settings)
        throws Exception
    {

        Settings entity = this.getSettingsDao().settingsDTOToEntity(settings);
        entity = this.getSettingsRepository().save(entity);
        return this.getSettingsDao().toSettingsDTO(entity);
    }

    /**
     * @see bw.co.centralkyc.settings.SettingsService#remove(String)
     */
    @Override
    protected boolean handleRemove(String id)
        throws Exception
    {
        // TODO implement protected  boolean handleRemove(String id)
        throw new UnsupportedOperationException("bw.co.centralkyc.settings.SettingsService.handleRemove(String id) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.settings.SettingsService#getAll()
     */
    @Override
    protected Collection<SettingsDTO> handleGetAll()
        throws Exception
    {
        
        Collection<Settings> entities = this.getSettingsRepository().findAll();
        return this.getSettingsDao().toSettingsDTOCollection(entities);

    }

    /**
     * @see bw.co.centralkyc.settings.SettingsService#search(String)
     */
    @Override
    protected Collection<SettingsDTO> handleSearch(String criteria)
        throws Exception
    {
        // TODO implement protected  Collection<SettingsDTO> handleSearch(String criteria)
        throw new UnsupportedOperationException("bw.co.centralkyc.settings.SettingsService.handleSearch(String criteria) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.settings.SettingsService#getAll(Integer, Integer)
     */
    @Override
    protected Page<SettingsDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throws Exception
    {
        // TODO implement protected  Page<SettingsDTO> handleGetAll(Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.centralkyc.settings.SettingsService.handleGetAll(Integer pageNumber, Integer pageSize) Not implemented!");
    }

    /**
     * @see bw.co.centralkyc.settings.SettingsService#search(String, Integer, Integer)
     */
    @Override
    protected Page<SettingsDTO> handleSearch(String criteria, Integer pageNumber, Integer pageSize)
        throws Exception
    {
        // TODO implement protected  Page<SettingsDTO> handleSearch(String criteria, Integer pageNumber, Integer pageSize)
        throw new UnsupportedOperationException("bw.co.centralkyc.settings.SettingsService.handleSearch(String criteria, Integer pageNumber, Integer pageSize) Not implemented!");
    }

}