import { play } from "./rock-paper-scissors";

describe("Unentschieden", () => {
    expect(play("rock", "rock")).toBe(0);
});

describe("Sieg für Spieler 1", () => {
    expect(play("rock", "scissors")).toBe(1);
});

describe("Sieg für Spieler 2", () => {
    expect(play("rock", "Paper")).toBe(2);
});