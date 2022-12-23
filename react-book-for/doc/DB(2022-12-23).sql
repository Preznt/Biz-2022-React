-- Book For

CREATE DATABASE BookForDB;
USE BookForDB;

DROP TABLE book_list;

CREATE TABLE user_book (
	username	VARCHAR(255),
b_code	BIGINT		,				
b_paragraph	VARCHAR(255),						
b_location	VARCHAR(125),						
b_state	VARCHAR(20)		,				
b_reg_date	timestamp	NOT NULL	default current_timestamp,
b_buy_date	VARCHAR(125),						
b_start_date	VARCHAR(125),						
b_done_date	VARCHAR(125)						
);