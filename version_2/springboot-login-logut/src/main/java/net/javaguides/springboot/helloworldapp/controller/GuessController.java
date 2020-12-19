package net.javaguides.springboot.helloworldapp.controller;


import net.javaguides.springboot.helloworldapp.Service.Guess_Service;
import net.javaguides.springboot.helloworldapp.bean.Guess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/api/v1")
public class GuessController {
	
	@Autowired
	private Guess_Service guessservice;

	@PostMapping("/save-guess")
	public boolean saveGuess(@RequestBody Guess guess) {
		 return guessservice.saveGuess(guess);
		
	}

	@GetMapping("/guesses-list")
	public List<Guess> allguesses() {
		 return guessservice.getGuesses();
	}


	@DeleteMapping("/delete-guess/{guess_id}")
	public boolean deleteGuess(@PathVariable("guess_id") int guess_id, Guess guess) {
		guess.setGuess_id(guess_id);
		return guessservice.deleteGuess(guess);
	}

	@GetMapping("/guess/{guess_id}")
	public List<Guess> allguessByID(@PathVariable("guess_id") int guess_id, Guess guess) {
		 guess.setGuess_id(guess_id);
		 return guessservice.getGuessByID(guess);
		
	}

	@PostMapping("/update-guess/{guess_id}")
	public boolean updateGuess(@RequestBody Guess guess, @PathVariable("guess_id") int guess_id) {
		guess.setGuess_id(guess_id);
		return guessservice.updateGuess(guess);
	}
}
