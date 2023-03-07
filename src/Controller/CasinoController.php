<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CasinoController extends AbstractController
{
    #[Route('/casino', name: 'app_casino')]
    public function index(): Response
    {
        return $this->render('casino/index.html.twig', [
            'controller_name' => 'CasinoController',
        ]);
    }
}
