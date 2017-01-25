export class Prediction {
    constructor (
        public solNum: String,
        public title: String,
        public url: String,
        public predictions: {RED: Number, GREEN: Number},
        public reviewRec: Boolean,
        public isReadable: Boolean,
        public eitLikelihood: Boolean,
        public Date: Date,
        public agency: String,
        public office: String,
        public contact: String,
        public position: String,
        public reviewStatus: Boolean
    ) {}
}
