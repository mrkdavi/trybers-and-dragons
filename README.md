<h1 align="center" height="700">
  TRYBERS
   <br>
  & DRAGONS
  <br>
  <br>
</h1>

<p align="center">
  A project developed at Trybe's Back-End Module
</p>

<br>

<p align="center">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/mrkdavi/trybers-and-dragons>
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/mrkdavi/trybers-and-dragons">
<img alt="GitHub" src="https://img.shields.io/badge/category-RPG-red">    
<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/mrkdavi/trybers-and-dragons?style=social">
</p>

## 📋 About
At this project you can create players and monsters to create battles. The available battle modes are PVP (Player Vs. Player) and PVE (Player Vs. Environment).

## 💻 Technology
- Node
- Typescript

## ✨ Features 
- Create a character
- Create a Monster
- Battle in PVP mode
- Battle in PVE mode

## 🧠 What I learned
At this project, I learned more about OOP and SOLID principles. 

## 📦 Running
> - Node version v16.15.0
> - Docker version 20.10.21
> - Docker Compose version v2.5.0

Start docker-compose
```bash
docker-compose up -d
```
Join docker container
```bash
docker exec -it trybers_and_dragons bash
```
Install dependences inside docker container
```bash
npm i
```
To run a file follow the next example
```bash 
ts-node <filename>
```
> advise: Run all necessary commands inside docker container
