package com.clearbnb.controllers;

import com.clearbnb.entities.Photo;
import com.clearbnb.services.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PhotoController {
    @Autowired
    PhotoService photoService;

    @GetMapping("/api/clearbnb/photos")
    public List<Photo> getPhotos() {
        return photoService.getPhotos();
    }

    /*@GetMapping("/api/clearbnb/photosByResidenceId/{residence_id}")
    public List<Photo> getPhotosByResidenceId(@PathVariable int residence_id) {
        return (List<Photo>) photoService.getPhotosByResidenceId(residence_id);
    }*/

    @PostMapping("/api/clearbnb/photos")
    public Photo createPhoto(@RequestBody Photo photo) {
        return photoService.createPhoto(photo);
    }

    @DeleteMapping("/api/clearbnb/photo/{id}")
    public void deletePhoto(@PathVariable int id) {
        photoService.deletePhoto(id);
    }
}
