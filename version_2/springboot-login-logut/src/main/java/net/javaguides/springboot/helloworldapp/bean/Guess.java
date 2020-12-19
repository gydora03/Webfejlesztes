package net.javaguides.springboot.helloworldapp.bean;

import javax.persistence.*;

@Entity
@Table(name="guess")
public class Guess {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int guess_id;
	private String guess_name;
	private String guess_email;
	private String guess_age;

	public Guess(int guess_id, String guess_name, String guess_email, String guess_age) {
		this.guess_id = guess_id;
		this.guess_name = guess_name;
		this.guess_email = guess_email;
		this.guess_age = guess_age;
	}


	public int getGuess_id() {
		return guess_id;
	}
	public void setGuess_id(int guess_id) { this.guess_id = guess_id; }
	public String getGuess_name() {
		return guess_name;
	}
	public void setGuess_name(String guess_name) {
		this.guess_name = guess_name;
	}
	public String getGuess_email() {
		return guess_email;
	}
	public void setGuess_email(String guess_email) {
		this.guess_email = guess_email;
	}
	public String getGuess_age() { return guess_age; }
	public void setGuess_age(String guess_age) { this.guess_age = guess_age; }

}
