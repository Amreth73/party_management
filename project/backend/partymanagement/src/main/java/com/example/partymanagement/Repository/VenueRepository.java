package com.example.partymanagement.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.partymanagement.Model.VenueModel;

public interface VenueRepository extends JpaRepository<VenueModel,Long> {


    @Query("SELECT v.eventDate FROM VenueModel v WHERE v.venueName = :venueName")
    List<String> findEventDateByVenueName(@Param("venueName") String venueName);
    
}
