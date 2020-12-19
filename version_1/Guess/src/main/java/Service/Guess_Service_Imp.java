package Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import DAO.Guess_DAO;
import Model.Guess;

@Service
@Transactional
public class Guess_Service_Imp implements Guess_Service {
 
	@Autowired
	private Guess_DAO guessdao;
	
	@Override
	public boolean saveGuess(Guess guess) {
		return guessdao.saveGuess(guess);
	}

	@Override
	public List<Guess> getGuesses() { return guessdao.getGuesses(); }

	@Override
	public boolean deleteGuess(Guess guess) {
		return guessdao.deleteGuess(guess);
	}

	@Override
	public List<Guess> getGuessByID(Guess guess) {
		return guessdao.getGuessByID(guess);
	}

	@Override
	public boolean updateGuess(Guess guess) {
		return guessdao.updateGuess(guess);
	}

}
