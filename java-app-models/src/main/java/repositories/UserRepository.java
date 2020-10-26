package org.njax.trinetco.netgrid.java.app.models;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Repository
// public interface UserRepository extends CrudRepository<UserEntity,Integer> {
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    // UserEntity findByEmail(String email);
    // UserEntity findByName(String name);

    // @Query(value = "Select * from users where id = ?1", nativeQuery = true)
    // public UserEntity findId(int id);

    // @Query(value = "SELECT * FROM Claim WHERE ClaimId = ?1", nativeQuery = true)
    // public UserEntity findByClaimId(String claimId);
    //
    // @Query(value = "SELECT * FROM Claim WHERE ClaimId = ?1 and PlatformId = ?2 and Subgroup = ?3 and MemberNumber = ?4", nativeQuery = true)
    // public UserEntity findByClaimIdAndPlatformIdAndSubgroupAndMemberNumber(String claimId, int platformId, String subgroup, String memberNumber);
    //
    // @Query(value = "SELECT * FROM Claim WHERE ClaimId = ?1 and PlatformId = ?2 and Subgroup = ?3 and StartingServiceDate = ?4", nativeQuery = true)
    // public UserEntity findByClaimIdAndPlatformIdAndSubgroupAndStartingServiceDate(String claimId, int platformId, String subgroup, LocalDate startingServiceDate);
    //
    // @Query(value = "SELECT * FROM Claim WHERE ClaimId = ?1 and PlatformId = ?2 and Subgroup = ?3 and ProviderMpin = ?4", nativeQuery = true)
    // public UserEntity findByClaimIdAndPlatformIdAndSubgroupAndProviderMpin(String claimId, int platformId, String subgroup, String providerMpin);
    //
    // @Query(value = "SELECT * FROM Claim WHERE ContractID = ?1 ORDER BY RowId LIMIT ?3, ?2", nativeQuery = true)
    // public List<UserEntity> findByContractId(int contractID, int claimLimit, int claimSkip);

}
