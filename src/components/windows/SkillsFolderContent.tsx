interface SkillsFolderContentProps {
  onOpenSkill?: (skillId: string, skillTitle: string) => void;
}

type Skill = {
id: string;
title: string;
level: string;
icon?: string;
};

import EnglishIcon from '../icons/en.png'
import GermanIcon from '../icons/de.png';
import TeamIcon from '../icons/team.png';
import ProblemIcon from '../icons/problem.png';
import DBIcon from '../icons/db.png';
import TestingIcon from '../icons/testing.png';
import LearningIcon from '../icons/learning.png';
import FuncIcon from '../icons/func.png';
import ObjectIcon from '../icons/object.png';
import VersIcon from '../icons/vers.png';

export function SkillsFolderContent({ onOpenSkill }: SkillsFolderContentProps) {

const skills: Skill[] = [
{ id: 'english', title: 'English', level: 'Advanced', icon: EnglishIcon },
{ id: 'german', title: 'German', level: 'Beginner', icon: GermanIcon },
{ id: 'func', title: 'Functional Programming', level: '', icon: FuncIcon },
{ id: 'oop', title: 'Object Orianted Programming', level: '', icon: ObjectIcon },
{ id: 'db', title: 'Database Management', level: '', icon: DBIcon },
{ id: 'team', title: 'Team Work', level: '', icon: TeamIcon },
{ id: 'ps', title: 'Problem Solving', level: '', icon: ProblemIcon },
{ id: 'cl', title: 'Continuous Learning', level: '', icon: LearningIcon },
{ id: 'vers', title: 'Version Control', level: '', icon: VersIcon },
{ id: 'test', title: 'Testing', level: '', icon: TestingIcon },

];

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill) => (
          <button
            key={skill.id}
            className="flex flex-col items-center gap-2 p-4 rounded hover:bg-blue-50 transition-colors"
            onDoubleClick={() => onOpenSkill?.(skill.id, skill.title)}
          >
            <div className="flex items-center justify-center w-24 h-24">
              {skill.icon ? (
                <img src={skill.icon} alt={skill.title} className="w-16 h-16 object-contain" />
              ) : (
                <span className="text-green-600 font-bold text-2xl">?</span>
              )}
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-800 leading-tight block">{skill.title}</span>
              <span className="text-xs text-gray-500">{skill.level}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
