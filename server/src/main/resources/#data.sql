
INSERT INTO public.users (user_id, created_on, email, name, phone) VALUES (102, '2022-11-23', 'andrei.varzari@appliedtechnology.se', 'Andrei Varzari', '0908038108');
INSERT INTO public.users (user_id, created_on, email, name, phone) VALUES (103, '2022-11-20', 'swetha.sureshmal@appliedtechnology.se', 'Swetha Sureshmal', '0908038108');

INSERT INTO public.account(account_id, balance, fk_user_id) VALUES (1452179495900473, 2000, 102);
INSERT INTO public.account(account_id, balance, fk_user_id) VALUES (8691807644003600, 2000, 103);


insert into users (user_id, address, created_on, email, name, phone, zen_name)
values (123, 'adsdd', '2022-11-23', 'swe@gmail.com', 'swetha', 2423444, 'sen');
