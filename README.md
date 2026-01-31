# Authenticator

Profesjonalny projekt generowania kodów uwierzytelniania (2FA / TOTP) w przeglądarce/serverze.

## 🧠 Opis projektu

**Authenticator** to aplikacja do generowania jednorazowych kodów uwierzytelniających (np. TOTP), oparta na technologiach:
- JavaScript / Node.js
- Moduł frontendowy do integracji w UI
- Backend API do zarządzania konfiguracją i sekretami

Repozytorium zawiera dwie główne części:
- `client` — interfejs użytkownika / biblioteka kliencka
- `server` — serwer API

---

## 🚀 Funkcje

- Generowanie kodów 6-cyfrowych zgodnych z TOTP
- Obsługa wielu kont/kluczy użytkownika
- Modularna architektura front + back

---

## 📦 Instalacja

### 1) Klonowanie repozytorium

```bash
git clone https://github.com/xsmartbartx/Authenticator.git
cd Authenticator
