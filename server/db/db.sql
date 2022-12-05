-- TERMINAL COMMAND: pg_dump -d nameOfDatabase; 
-- Purpose: pg_dump creates a back-up of your database by extracting it(database) into a script file.
-- Create nameOfFile.sql file(in db folder) on server side, paste & save pg_dump script file, need to comment out info after "SET"
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: js; Type: TABLE; Schema: public; Owner: tpl522_10
--

CREATE TABLE public.js (
    id integer NOT NULL,
    question character varying(500),
    answer character varying(500)
);


ALTER TABLE public.js OWNER TO tpl522_10;

--
-- Name: js_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_10
--

CREATE SEQUENCE public.js_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.js_id_seq OWNER TO tpl522_10;

--
-- Name: js_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_10
--

ALTER SEQUENCE public.js_id_seq OWNED BY public.js.id;


--
-- Name: js id; Type: DEFAULT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.js ALTER COLUMN id SET DEFAULT nextval('public.js_id_seq'::regclass);


--
-- Data for Name: js; Type: TABLE DATA; Schema: public; Owner: tpl522_10
--

COPY public.js (id, question, answer) FROM stdin;
5	What do the functions  map, filter, and reduce do, when would be a good example of when to use them? Does this mutate my data?	sample5
1	What built-in array methods do you know, and what do they do?	sample1
2	What does "returning" something mean	sample2
3	What is a parameter?	sample3
4	When should I use "var", "let", "const"?	sample4
\.


--
-- Name: js_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_10
--

SELECT pg_catalog.setval('public.js_id_seq', 5, true);


--
-- Name: js js_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_10
--

ALTER TABLE ONLY public.js
    ADD CONSTRAINT js_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--