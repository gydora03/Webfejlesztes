package net.javaguides.springboot.helloworldapp.Service;

import net.javaguides.springboot.helloworldapp.bean.Guess;

import java.util.List;

public interface Guess_Service {

	
	public boolean saveGuess(Guess guess);
	public List<Guess> getGuesses();
	public boolean deleteGuess(Guess guess);
	public List<Guess> getGuessByID(Guess guess);
	public boolean updateGuess(Guess guess);
}
