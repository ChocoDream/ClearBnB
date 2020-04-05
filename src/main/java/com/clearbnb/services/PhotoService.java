package com.clearbnb.services;

import com.clearbnb.entities.Photo;
import com.clearbnb.repositories.PhotoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhotoService {
    @Autowired
    private PhotoRepo photoRepo;

    public List<Photo> getPhotos() {
        return (List<Photo>) photoRepo.findAll();
    }

    /*public Photo getPhotosByResidenceId(int residence_id){
        return (List<Photo>) photoRepo.getPhotosByResidenceId(residence_id);
    }*/

    public Photo createPhoto(Photo photo) {
        return photoRepo.save(photo);
    }

    public void deletePhoto(int id) {
        photoRepo.deleteById(id);
    }
}
