INSERT INTO plantapi.plant(id, name, watering_schedule, water_Amount, light_Level, pet_Friendly, imgURL) VALUES ((select next_val from plant_seq), 'Air Plant', 'FREQ=WEEKLY;INTERVAL=1;BYDAY=SU', 'Low', 'High', true, 'https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-852d1804--T-Velutina.jpg?v=1610136905');
update plant_seq set next_val = next_val + 1;

INSERT INTO plantapi.plant(id, name, watering_schedule, water_Amount, light_Level, pet_Friendly, imgURL) VALUES ((select next_val from plant_seq), 'Fern', 'FREQ=WEEKLY;INTERVAL=1;BYDAY=SU', 'Low', 'Medium', true, 'https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-0ab858df--1FernAutumn4-MAIN-1.jpg?v=1608339220');
update plant_seq set next_val = next_val + 1;

INSERT INTO plantapi.plant(id, name, watering_schedule, water_Amount, light_Level, pet_Friendly, imgURL) VALUES ((select next_val from plant_seq), 'Ficus', 'FREQ=WEEKLY;INTERVAL=1;BYDAY=SU', 'Medium', 'Medium', false, 'https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_ficus_tineke_1-1674259437147.jpg?v=1674259444');
update plant_seq set next_val = next_val + 1;

INSERT INTO plantapi.plant(id, name, watering_schedule, water_Amount, light_Level, pet_Friendly, imgURL) VALUES ((select next_val from plant_seq), 'Monstera', 'FREQ=WEEKLY;INTERVAL=2;BYDAY=SU', 'Medium', 'Medium', false, 'https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-c107779f--1PhilodendronMonstera6.jpg?v=1611000641');
update plant_seq set next_val = next_val + 1;

INSERT INTO plantapi.plant(id, name, watering_schedule, water_Amount, light_Level, pet_Friendly, imgURL) VALUES ((select next_val from plant_seq), 'Peace Lily', 'FREQ=WEEKLY;INTERVAL=1;BYDAY=SU', 'Low', 'High', false, 'https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_spathiphyllum_green_1-1674509113620.jpg?v=1674509114');
update plant_seq set next_val = next_val + 1;

INSERT INTO plantapi.plant(id, name, watering_schedule, water_Amount, light_Level, pet_Friendly, imgURL) VALUES ((select next_val from plant_seq), 'Philodendron', 'FREQ=WEEKLY;INTERVAL=1;BYDAY=SU', 'Medium', 'Medium', false, 'https://www.logees.com/media/catalog/product/cache/591fdb89253f9c8a7ddf22863c64f690/p/h/philodendron_melanochrysum_cover_15_flat_copy.jpg');
update plant_seq set next_val = next_val + 1;

INSERT INTO plantapi.plant(id, name, watering_schedule, water_Amount, light_Level, pet_Friendly, imgURL) VALUES ((select next_val from plant_seq), 'Snake Plant', 'FREQ=WEEKLY;INTERVAL=2;BYDAY=SU', 'Low', 'Low', false, 'https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-1b9ba48a--1SnakeLaurentii6-8.jpg?v=1611106175');
update plant_seq set next_val = next_val + 1;

INSERT INTO plantapi.plant(id, name, watering_schedule, water_Amount, light_Level, pet_Friendly, imgURL) VALUES ((select next_val from plant_seq), 'Spider Plant', 'FREQ=WEEKLY;INTERVAL=1;BYDAY=SU', 'Low', 'Medium', true, 'https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-f142c0b4--1SpiderReverse4-MAIN.jpg?v=1611170339');
update plant_seq set next_val = next_val + 1;

INSERT INTO plantapi.plant(id, name, watering_schedule, water_Amount, light_Level, pet_Friendly, imgURL) VALUES ((select next_val from plant_seq), 'Succulent', 'FREQ=WEEKLY;INTERVAL=2;BYDAY=SU', 'Low', 'High', true, 'https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_succ_portulacaria_elephantbush_2-1674256776699.jpg?v=1674256778');
update plant_seq set next_val = next_val + 1;

INSERT INTO plantapi.plant(id, name, watering_schedule, water_Amount, light_Level, pet_Friendly, imgURL) VALUES ((select next_val from plant_seq), 'Zamioculcas', 'FREQ=WEEKLY;INTERVAL=2;BYDAY=SU', 'Low', 'Medium', false, 'https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-89beddd6--1ZamioculcasZamiifolia6.jpg?v=1611974245');
update plant_seq set next_val = next_val + 1;







