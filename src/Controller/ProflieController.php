<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\PointsType;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Attribute\IsGranted;

class ProflieController extends AbstractController
{
   

    #[Route('/proflie/{id}', name: 'app_proflie')]
    #[IsGranted('IS_AUTHENTICATED_FULLY')]
    public function addPoints(
        Request $request,
        User $user,
        UserRepository $points
    ): Response {
        $form = $this->createForm(PointsType::class);
        $form->handleRequest($request);
    
        if ($form->isSubmitted() && $form->isValid()) {
            $punkty = $form->getData()->getPunkty(); // Użyj metody getPunkty() na obiekcie User
            $user->setPunkty($user->getPunkty() + $punkty);
            $points->save($user, $punkty, true);
    
            return $this->redirectToRoute('app_proflie', ['id' => $user->getId()]);
        }
    
        return $this->render('proflie/index.html.twig', [
            'form' => $form->createView(),
            'user' => $user,
        ]);
    }
}
