# make test: run the ERT tests in test/ with e8 --batch, as CI does.
# make types: type-check the package against the E8 on PATH.
# make port: write the ported themes again from their upstreams (below).
# E8=/path/to/e8 make test, to use another E8.

E8 ?= e8
TESTS := $(wildcard test/*-tests.ts)
.PHONY: test types

test:
	$(E8) --batch -L . $(foreach t,$(TESTS),-l $(t)) -f ert-run-tests-batch-and-exit

types:
	$(E8) --print-types .e8
	tsc -p .

# make port UPSTREAM=dir: write the themes again from their upstreams,
# checked out in dir as tools/port-themes.el names them (gruvbox, autothemer,
# dash, solarized, tomorrow, catppuccin, zenburn, dracula, doom); Modus,
# Leuven and Wombat come from the Emacs that runs it. FAMILIES=... for some.
UPSTREAM ?= ../upstream
.PHONY: port
port:
	emacs -Q --batch -l tools/port-themes.el -f e8-port-themes $(UPSTREAM) $(FAMILIES)
