package bw.co.centralkyc;

import java.util.Collection;
import java.util.Map;

public interface PhoneNumberMapper {
    default Collection<PhoneNumber> toDto(Collection<Map> maps) {
        if (maps == null) return null;
        return maps.stream()
            .map(m -> new PhoneNumber(
                PhoneType.fromString((String) m.get("type")),
                (String) m.get("phoneNumber")
            ))
            .toList();
    }

    default Collection<Map<String, String>> toEntity(Collection<PhoneNumber> phones) {
        if (phones == null) return null;
        return phones.stream()
            .map(p -> Map.of(
                "type", p.getType().getValue(),
                "phoneNumber", p.getPhoneNumber()
            ))
            .toList();
    }
}
