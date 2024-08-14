package com.example.partymanagement.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.partymanagement.Model.VenueModel;
import com.example.partymanagement.Service.VenueService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/venues")
public class VenueController {

    @Autowired
    private VenueService service;

    @PostMapping("/add")
    public String postMethodName(@RequestBody VenueModel obj) {
        service.postData(obj);
        return "Done";
    }
    @GetMapping("/getDate/{name}")
    public List<String> getDate(@PathVariable String name){
        return service.getData(name);
    }
}
