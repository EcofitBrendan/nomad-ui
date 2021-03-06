import { combineReducers } from 'redux';

import { JobInfoReducer, JobListReducer } from './job'
import { AllocInfoReducer, AllocListReducer } from './allocation'
import { EvalInfoReducer, EvalListReducer } from './evaluation'
import { NodeInfoReducer, NodeListReducer } from './node'
import { DirectoryReducer, FileReducer} from './filesystem'

const rootReducer = combineReducers({
    job: JobInfoReducer,
    jobs: JobListReducer,
    node: NodeInfoReducer,
    nodes: NodeListReducer,
    allocation: AllocInfoReducer,
    allocations: AllocListReducer,
    evaluation: EvalInfoReducer,
    evaluations: EvalListReducer,
    directory: DirectoryReducer,
    file: FileReducer
});

export default rootReducer;
