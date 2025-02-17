from flask import Flask, jsonify, request
from flask_cors import CORS
from models import db, Team, Match, Player, Area

app = Flask(__name__)
app.config.from_object('config.Config')
db.init_app(app)
CORS(app)

@app.route('/teams', methods=['GET'])
def get_teams():
    teams = Team.query.all()
    return jsonify([{"id": team.id, "name": team.name, "country": team.country} for team in teams])

@app.route('/matches', methods=['GET'])
def get_matches():
    matches = Match.query.all()
    return jsonify([{"id": match.id, "home_team": match.home_team_id, "away_team": match.away_team_id, "date": match.date} for match in matches])

if __name__ == '__main__':
    app.run(debug=True)
