-- Table: public.logger

-- DROP TABLE IF EXISTS public.logger;
CREATE TABLE IF NOT EXISTS public.logger
(
    id  SERIAL PRIMARY KEY,
    date timestamp without time zone NOT NULL,
    message character varying COLLATE pg_catalog."default" NOT NULL,
    error character varying COLLATE pg_catalog."default" NOT NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.logger
    OWNER to postgres;
-- Table: public.visualInfo
-- DROP TABLE IF EXISTS public."visualInfo";
CREATE TABLE IF NOT EXISTS public."visualInfo"
(
    id  SERIAL PRIMARY KEY,
    info jsonb NOT NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."visualInfo"
    OWNER to postgres;
