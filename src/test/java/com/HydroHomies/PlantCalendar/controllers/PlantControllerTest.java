package com.HydroHomies.PlantCalendar.controllers;

import com.HydroHomies.PlantCalendar.entities.Plant;
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

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD) // reset the database for each test
@AutoConfigureMockMvc
class PlantControllerTest {
    @Autowired
    private MockMvc mvc;

    @Test
    public void getPlants() throws Exception {
        mvc.perform(MockMvcRequestBuilders.get("/api/plants").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void postPlant() throws Exception {
        Plant test = new Plant("Test", "FREQ=DAILY;INTERVAL=2;BYDAY=SU", "Low", "High", true, "testURL");
        test.setId(1);
        mvc.perform(MockMvcRequestBuilders.post("/api/plants")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(test)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(test)))
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void getPlant() throws Exception {
        Plant test = new Plant("Test", "FREQ=DAILY;INTERVAL=2;BYDAY=SU", "Low", "High", true, "testURL");
        test.setId(1);
        mvc.perform(MockMvcRequestBuilders.post("/api/plants")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(test)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(test)))
                .andDo(MockMvcResultHandlers.print());
         mvc.perform(MockMvcRequestBuilders.get("/api/plants/" + test.getId())
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(test)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(test)))
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void putPlant() throws Exception {
        Plant test = new Plant("Test", "FREQ=DAILY;INTERVAL=2;BYDAY=SU", "Low", "High", true, "testURL");
        test.setId(1);
        mvc.perform(MockMvcRequestBuilders.post("/api/plants")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(test)))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(getJsonContent(test)))
                .andDo(MockMvcResultHandlers.print());
        mvc.perform(MockMvcRequestBuilders.put("/api/addRR/MO")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(getJsonContent(test)))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }



    private static String getJsonContent(Object o) throws JsonProcessingException {
        return new ObjectMapper().writeValueAsString(o);
    }
}