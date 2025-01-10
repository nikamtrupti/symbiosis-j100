package com.trg.springboot.controller;


import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.trg.springboot.model.Client;
import com.trg.springboot.exception.ResourceNotFoundException;
import com.trg.springboot.repository.ClientRepository;
import com.trg.springboot.service.registerService;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ClientController {

    @Autowired
    private ClientRepository clientrepository;

    public ClientController(ClientRepository clientrepository) {

        this.clientrepository = clientrepository;
    }

    @PostMapping("/CreateClient")
    public ResponseEntity<Client> saveClient(@RequestBody Client client) {
    	System.out.println("client records:"+ client);
       return new ResponseEntity<>(clientrepository.save(client), HttpStatus.CREATED);
    }
  
    @GetMapping("/GetAllClients")
    public List<Client> getAllClients() {
        return clientrepository.findAll(); 
    }
}