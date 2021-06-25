package com.hugos.hm.repository;

import com.hugos.hm.model.Artwork;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtworkRepo extends JpaRepository<Artwork, Long> {
}
