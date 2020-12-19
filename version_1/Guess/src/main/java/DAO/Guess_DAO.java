package DAO;

import java.util.List;

import Model.Guess;

public interface Guess_DAO {

	public boolean saveGuess(Guess guess);
	public List<Guess> getGuesses();
	public boolean deleteGuess(Guess guess);
	public List<Guess> getGuessByID(Guess guess);
	public boolean updateGuess(Guess guess);
}
