package com.HydroHomies.PlantCalendar.controllers;

import com.HydroHomies.PlantCalendar.entities.Plant;
import com.HydroHomies.PlantCalendar.entities.User;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD) // reset the database for each test
@AutoConfigureMockMvc
class UserControllerTest {
    @Autowired
    private MockMvc mvc;

    @Test
    public void getUsers() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/api/users").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void postUser() throws Exception {
        User test = new User ("Tester", "test");
        mvc.perform(MockMvcRequestBuilders.post("/api/users")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(test)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(test)))
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void getUser() throws Exception {
        User test = new User ("Tester", "test");
        mvc.perform(MockMvcRequestBuilders.post("/api/users")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(test)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(test)))
                .andDo(MockMvcResultHandlers.print());
         mvc.perform(MockMvcRequestBuilders.get("/api/users/" + test.getUsername())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(test)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(test)))
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void addPlant() throws Exception {
        //create a new user and plant
        User testUser = new User ("Tester", "test");
        Plant testPlant = new Plant("Test", "FREQ=DAILY;INTERVAL=2", "Low", "High", true, "testURL");
        testPlant.setId(1);

        //post user to database
        mvc.perform(MockMvcRequestBuilders.post("/api/users")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(testUser)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(testUser)))
                .andDo(MockMvcResultHandlers.print());
        //make sure user is in the database
        mvc.perform(MockMvcRequestBuilders.get("/api/users/" + testUser.getUsername())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(testUser)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(testUser)))
                .andDo(MockMvcResultHandlers.print());
        //post the plant to the database
        mvc.perform(MockMvcRequestBuilders.post("/api/plants")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(testPlant)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(testPlant)))
                .andDo(MockMvcResultHandlers.print());
        //make sure the plant is in the database
        mvc.perform(MockMvcRequestBuilders.get("/api/plants/" + testPlant.getId())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(testPlant)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(testPlant)))
                .andDo(MockMvcResultHandlers.print());
        //add the plant in the database to the user's collection
        mvc.perform(MockMvcRequestBuilders.put("/api/users/" + testUser.getUsername() + "/plantCollection/" + testPlant.getId())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void deletePlant() throws Exception {
        //create a new user and plant
        User testUser = new User ("Tester", "test");
        Plant testPlant = new Plant("Test", "FREQ=DAILY;INTERVAL=2", "Low", "High", true, "testURL");
        testPlant.setId(1);

        //post user to database
        mvc.perform(MockMvcRequestBuilders.post("/api/users")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(testUser)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(testUser)))
                .andDo(MockMvcResultHandlers.print());
        //make sure user is in the database
        mvc.perform(MockMvcRequestBuilders.get("/api/users/" + testUser.getUsername())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(testUser)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(testUser)))
                .andDo(MockMvcResultHandlers.print());
        //post the plant to the database
        mvc.perform(MockMvcRequestBuilders.post("/api/plants")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(testPlant)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(testPlant)))
                .andDo(MockMvcResultHandlers.print());
        //make sure the plant is in the database
        mvc.perform(MockMvcRequestBuilders.get("/api/plants/" + testPlant.getId())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(testPlant)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(testPlant)))
                .andDo(MockMvcResultHandlers.print());
        //add the plant in the database to the user's collection
        mvc.perform(MockMvcRequestBuilders.put("/api/users/" + testUser.getUsername() + "/plantCollection/" + testPlant.getId())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
        //delete the plant from the user collection
        mvc.perform(MockMvcRequestBuilders.delete("/api/users/" + testUser.getUsername() + "/plantCollection/" + testPlant.getId())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void addTwoUsers() throws Exception {
        //create a new user and plant
        User testUser = new User ("Tester", "test");
        User testUser2 = new User ("Tester2", "test");
        Plant testPlant = new Plant("Test", "FREQ=DAILY;INTERVAL=2", "Low", "High", true, "testURL");
        testPlant.setId(1);

        //post user to database
        mvc.perform(MockMvcRequestBuilders.post("/api/users")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(testUser)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(testUser)))
                .andDo(MockMvcResultHandlers.print());

        // Added second user to test
        mvc.perform(MockMvcRequestBuilders.post("/api/users")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(testUser2)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(testUser2)))
                .andDo(MockMvcResultHandlers.print());

        //make sure user is in the database
        mvc.perform(MockMvcRequestBuilders.get("/api/users/" + testUser.getUsername())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(testUser)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(testUser)))
                .andDo(MockMvcResultHandlers.print());

        // Make sure the second user is in the database
        mvc.perform(MockMvcRequestBuilders.get("/api/users/" + testUser2.getUsername())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(testUser2)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(testUser2)))
                .andDo(MockMvcResultHandlers.print());

        //post the plant to the database
        mvc.perform(MockMvcRequestBuilders.post("/api/plants")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(testPlant)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(testPlant)))
                .andDo(MockMvcResultHandlers.print());
        //make sure the plant is in the database
        mvc.perform(MockMvcRequestBuilders.get("/api/plants/" + testPlant.getId())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(testPlant)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(testPlant)))
                .andDo(MockMvcResultHandlers.print());
        //add the plant in the database to the user's collection
        mvc.perform(MockMvcRequestBuilders.put("/api/users/" + testUser.getUsername() + "/plantCollection/" + testPlant.getId())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());

        //add the plant in the database to the second user's collection
        mvc.perform(MockMvcRequestBuilders.put("/api/users/" + testUser2.getUsername() + "/plantCollection/" + testPlant.getId())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }



    private static String getJsonContent(Object o) throws JsonProcessingException {
        return new ObjectMapper().writeValueAsString(o);
    }


}