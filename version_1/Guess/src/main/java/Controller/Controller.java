package Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Model.Guess;
import Service.Guess_Service;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/api")
public class Controller {
	
	@Autowired
	private Guess_Service guessservice;
	
	@PostMapping("save-guess")
	public boolean saveGuess(@RequestBody Guess guess) {
		 return guessservice.saveGuess(guess);
		
	}
	
	@GetMapping("guesses-list")
	public List<Guess> allguesses() {
		 return guessservice.getGuesses();
	}
	
	
	@DeleteMapping("delete-guess/{guess_id}")
	public boolean deleteGuess(@PathVariable("guess_id") int guess_id, Guess guess) {
		guess.setGuess_id(guess_id);
		return guessservice.deleteGuess(guess);
	}

	@GetMapping("guess/{guess_id}")
	public List<Guess> allguessByID(@PathVariable("guess_id") int guess_id, Guess guess) {
		 guess.setGuess_id(guess_id);
		 return guessservice.getGuessByID(guess);
		
	}
	
	@PostMapping("update-guess/{guess_id}")
	public boolean updateGuess(@RequestBody Guess guess, @PathVariable("guess_id") int guess_id) {
		guess.setGuess_id(guess_id);
		return guessservice.updateGuess(guess);
	}
}
