# make test: run the ERT tests in test/ with e8 --batch, as CI does.
# make types: type-check the package against the E8 on PATH.
# make port: write the ported themes again from their upstreams (below).
# make check-upstreams: say which upstreams have changed since they were ported.
# E8=/path/to/e8 make test, to use another E8.

E8 ?= e8
TESTS := $(wildcard test/*-tests.ts)
.PHONY: test types

test:
	$(E8) --batch -L . $(foreach t,$(TESTS),-l $(t)) -f ert-run-tests-batch-and-exit

types:
	$(E8) --print-types .e8
	tsc -p .

# make port: fetch the upstreams at the commits tools/upstreams.tsv pins, into
# .upstream/, and write the themes, sources.json, e8-themes-index.ts and
# THEMES.md again from them, with GNU Emacs.
# make check-upstreams: say which upstreams have changed since.
.PHONY: port check-upstreams
port:
	tools/fetch-upstreams.sh
	emacs -Q --batch -l tools/port-themes.el -f e8-port-themes

check-upstreams:
	tools/check-upstreams.py
