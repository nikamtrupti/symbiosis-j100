package com.trg.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.trg.springboot.model.Client;
import com.trg.springboot.repository.ClientRepository;

@Service
@Component
public class registerService {
	@Autowired
	private static ClientRepository clientrepository;
	
	public static Client saveClient(Client client) {
        // Ensure role assignment is handled correctly
        if ("client".equalsIgnoreCase(client.getClientRole())) {
            client.setClientRole("Client");
        } else if ("student".equalsIgnoreCase(client.getClientRole())) {
            client.setClientRole("Student");
        }
        return clientrepository.save(client);
    }

}
