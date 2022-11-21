DROP TABLE IF EXISTS public.customer;

create table if not exists customer
(
    customer_id bigint not null
    primary key,
    name        varchar(255)
    );

alter table customer
    owner to etahwekj;

DROP TABLE IF EXISTS public.account;
create table if not exists account
(
    account_id bigint not null
    primary key,
    balance    double precision,
    fk_cust_id bigint
    constraint fk9772tqmnvlgr6fnkbl1u2gqwx
    references customer
);

alter table account
    owner to etahwekj;

DROP TABLE IF EXISTS public.transaction;
create table if not exists transaction
(
    transaction_id bigint           not null
    primary key,
    amount         double precision not null,
    description    varchar(255),
    fk_acc_id      bigint
    constraint fk97a3c94qkynijo2e0sllgpni1
    references account
    );

alter table transaction
    owner to etahwekj;



INSERT INTO public.customer(customer_id, name) VALUES (1, 'Andrei');
INSERT INTO public.customer(customer_id, name) VALUES (2, 'Erik');
INSERT INTO public.customer(customer_id, name) VALUES (3, 'Swetha');

INSERT INTO public.account(account_id, balance, fk_cust_id) VALUES (123, 800, 1);