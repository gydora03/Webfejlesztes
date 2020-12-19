package net.javaguides.springboot.helloworldapp.DAO;

import net.javaguides.springboot.helloworldapp.bean.Guess;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class Guess_DAO_Imp implements Guess_DAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public boolean saveGuess(Guess guess) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().save(guess);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Guess> getGuesses() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Guess> query=currentSession.createQuery("from Guess", Guess.class);
		List<Guess> list=query.getResultList();
		return list;
	}

	@Override
	public boolean deleteGuess(Guess guess) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().delete(guess);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Guess> getGuessByID(Guess guess) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Guess> query=currentSession.createQuery("from Guess where guess_id=:guess_id", Guess.class);
		query.setParameter("guess_id", guess.getGuess_id());
		List<Guess> list=query.getResultList();
		return list;
	}

	@Override
	public boolean updateGuess(Guess guess) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().update(guess);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	

}
