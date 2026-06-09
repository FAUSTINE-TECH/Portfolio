<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Affiche la page portfolio.
     */
    public function index()
    {
        return Inertia::render('Portfolio');
    }

    /**
     * Traite le formulaire de contact.
     */
    public function contact(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:100',
            'email'   => 'required|email|max:150',
            'subject' => 'required|string|max:200',
            'message' => 'required|string|max:3000',
        ], [
            'name.required'    => 'Veuillez entrer votre nom.',
            'email.required'   => 'Veuillez entrer votre adresse email.',
            'email.email'      => 'L\'adresse email n\'est pas valide.',
            'message.required' => 'Veuillez écrire un message.',
        ]);

        // Envoi de l'email
        Mail::send([], [], function ($mail) use ($validated) {
            $mail
                ->to(config('mail.contact_email', 'f.sandrahaidara@gmail.com'))
                ->replyTo($validated['email'], $validated['name'])
                ->subject('[Portfolio] ' . $validated['subject'])
                ->html(
                    view('emails.contact', $validated)->render()
                );
        });

        return back()->with('success', 'Votre message a bien été envoyé !');
    }
}
