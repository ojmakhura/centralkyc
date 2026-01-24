package bw.co.centralkyc;

import java.util.Collection;
import java.util.Map;

import org.mapstruct.Mapper;

@Mapper(
    componentModel = "spring"
)
public interface PhoneNumberMapper {

    default Map toMap(PhoneNumber phone) {
        if (phone == null) return null;
        return Map.of(
            "type", phone.getType().getValue(),
            "phoneNumber", phone.getPhoneNumber()
        );
    }

    default PhoneNumber toPhoneNumber(Map map) {
        if (map == null) return null;
        return new PhoneNumber(
            PhoneType.fromString((String) map.get("type")),
            (String) map.get("phoneNumber")
        );
    }

    default Collection<PhoneNumber> toPhoneNumberCollection(Collection<Map> maps) {
        if (maps == null) return null;
        return maps.stream()
            .map(m -> this.toPhoneNumber(m))
            .toList();
    }

    default Collection<Map> toMapCollection(Collection<PhoneNumber> phones) {
        if (phones == null) return null;
        return phones.stream()
            .map(p -> this.toMap(p))
            .toList();
    }
}
