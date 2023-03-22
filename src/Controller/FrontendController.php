<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FrontendController extends AbstractController
{
    #[Route("/app/{route}", name: 'app', requirements: ['route'=>'.*'])]
    public function index(): Response
    {
        return $this->render('app/index.html.twig', [
            'controller_name' => 'FrontendController',
        ]);
    }

    #[Route("/", name: 'redirect')]
    public function base() : RedirectResponse {
        return $this->redirectToRoute('app', ['route' => '']);
    }
}
