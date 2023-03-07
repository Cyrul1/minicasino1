<?php

namespace App\Entity;

use App\Repository\BetRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BetRepository::class)]
class Bet
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'bets')]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'bets')]
    private ?Game $game = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    private ?GameResult $wynik = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getGame(): ?Game
    {
        return $this->game;
    }

    public function setGame(?Game $game): self
    {
        $this->game = $game;

        return $this;
    }

    public function getWynik(): ?GameResult
    {
        return $this->wynik;
    }

    public function setWynik(?GameResult $wynik): self
    {
        $this->wynik = $wynik;

        return $this;
    }
}
