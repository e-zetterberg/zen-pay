INSERT INTO public.users (user_id, created_on, email, name, phone) VALUES (101, '2022-11-23', 'swetha.sureshmal@appliedtechnology.se', 'Swetha Sureshmal', '0908038108');
INSERT INTO public.users (user_id, created_on, email, name, phone) VALUES (102, '2022-11-23', 'erik.zetterberg@appliedtechnology.se', 'Erik Zetterberg', '0735099472');
INSERT INTO public.users (user_id, created_on, email, name, phone) VALUES (103, '2022-11-23', 'andrei.varzari@appliedtechnology.se', 'Andrei Varzari', '0908038108');

INSERT INTO public.account(account_id, balance, fk_user_id) VALUES (1873771645899017, 1000, 101);
INSERT INTO public.account(account_id, balance, fk_user_id) VALUES (5184738024134449, 500, 102);
INSERT INTO public.account(account_id, balance, fk_user_id) VALUES (1452179495900473, 2000, 103);




